import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar handleSearch integration (user-event)', () => {
  test('calls handleSearch with plain query when defaults are used', async () => {
    const user = userEvent.setup();
    const handleSearch = jest.fn();
    render(<SearchBar handleSearch={handleSearch} />);

    const searchInput = screen.getByPlaceholderText(/Track, Artist, or Genre/i);
    const goButton = screen.getByRole('button', { name: /go/i });

    await user.type(searchInput, 'hello world');
    await user.click(goButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('hello world');
  });

  test('prepends searchType and appends year when provided (artist + single year)', async () => {
    const user = userEvent.setup();
    const handleSearch = jest.fn();
    render(<SearchBar handleSearch={handleSearch} />);

    const searchInput = screen.getByPlaceholderText(/Track, Artist, or Genre/i);
    const yearInput = screen.getByPlaceholderText(/e.g., 1999 or 1980-2001/i);

    // open dropdown and choose Artists
    const toggle = screen.getByRole('button', { name: /toggle dropdown/i });
    await user.click(toggle);
    const artistsItem = screen.getByText(/Artists/i);

    await user.type(searchInput, 'Beatles');
    await user.click(artistsItem);
    await user.type(yearInput, '1999');

    const goButton = screen.getByRole('button', { name: /go/i });
    await user.click(goButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('artist:Beatles year:1999');
  });

  test('prepends album when album selected and accepts a year range', async () => {
    const user = userEvent.setup();
    const handleSearch = jest.fn();
    render(<SearchBar handleSearch={handleSearch} />);

    const searchInput = screen.getByPlaceholderText(/Track, Artist, or Genre/i);
    const yearInput = screen.getByPlaceholderText(/e.g., 1999 or 1980-2001/i);

    // open dropdown and choose Albums
    const toggle = screen.getByRole('button', { name: /toggle dropdown/i });
    await user.click(toggle);
    const albumsItem = screen.getByText(/Albums/i);

    await user.type(searchInput, 'Greatest Hits');
    await user.click(albumsItem);
    await user.type(yearInput, '1980-2001');

    const goButton = screen.getByRole('button', { name: /go/i });
    await user.click(goButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('album:Greatest Hits year:1980-2001');
  });

  test('prepends track when Songs selected', async () => {
    const user = userEvent.setup();
    const handleSearch = jest.fn();
    render(<SearchBar handleSearch={handleSearch} />);

    const searchInput = screen.getByPlaceholderText(/Track, Artist, or Genre/i);

    const toggle = screen.getByRole('button', { name: /toggle dropdown/i });
    await user.click(toggle);
    const songsItem = screen.getByText(/Songs/i);

    await user.type(searchInput, 'Yellow Submarine');
    await user.click(songsItem);

    const goButton = screen.getByRole('button', { name: /go/i });
    await user.click(goButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('track:Yellow Submarine');
  });

  test('uses Any (no prefix) when Any selected', async () => {
    const user = userEvent.setup();
    const handleSearch = jest.fn();
    render(<SearchBar handleSearch={handleSearch} />);

    const searchInput = screen.getByPlaceholderText(/Track, Artist, or Genre/i);

    const toggle = screen.getByRole('button', { name: /toggle dropdown/i });
    await user.click(toggle);
    const anyItem = screen.getByText(/Any/i);

    await user.type(searchInput, 'lovely day');
    await user.click(anyItem);

    const goButton = screen.getByRole('button', { name: /go/i });
    await user.click(goButton);

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('lovely day');
  });
});
