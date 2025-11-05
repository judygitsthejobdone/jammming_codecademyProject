import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar handleSearch integration (user-event)', () => {
    // reused across tests
    let searchInput, goButton, yearInput, toggle, handleSearch, user;
    beforeEach(() => {
        user = userEvent.setup();
        handleSearch = jest.fn();
        render(<SearchBar handleSearch={handleSearch} />);

        searchInput = screen.getByPlaceholderText(/Track, Artist, or Album/i);
        goButton = screen.getByRole('button', { name: /go/i });
        yearInput = screen.getByPlaceholderText(/e.g., 1999 or 1980-2001/i);
        toggle = screen.getByRole('button', { name: /toggle dropdown/i });
    });
    
  test('calls handleSearch with plain query when defaults are used', async () => {

    await user.type(searchInput, 'hello world');
    await user.click(goButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('hello world');
  });

  test('prepends searchType and appends year when provided (artist + single year)', async () => {
    
    // open dropdown and choose Artists
    await user.click(toggle);
    const artistsItem = screen.getByText(/Artists/i);

    await user.type(searchInput, 'Beatles');
    await user.click(artistsItem);
    await user.type(yearInput, '1999');

    await user.click(goButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('artist:Beatles year:1999');
  });

  test('prepends album when album selected and accepts a year range', async () => {

    // open dropdown and choose Albums
    await user.click(toggle);
    const albumsItem = screen.getByText(/Albums/i);

    await user.type(searchInput, 'Greatest Hits');
    await user.click(albumsItem);
    await user.type(yearInput, '1980-2001');

    await user.click(goButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('album:Greatest Hits year:1980-2001');
  });

  test('prepends track when Songs selected', async () => {

    // open dropdown and choose Songs
    await user.click(toggle);
    const songsItem = screen.getByText(/Songs/i);

    await user.type(searchInput, 'Yellow Submarine');
    await user.click(songsItem);

    await user.click(goButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('track:Yellow Submarine');
  });

  test('uses Any (no prefix) when Any selected', async () => {
    
    // open dropdown and choose Any
    await user.click(toggle);
    const anyItem = screen.getByText(/Any/i);

    await user.type(searchInput, 'lovely day');
    await user.click(anyItem);

    await user.click(goButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('lovely day');
  });
});
