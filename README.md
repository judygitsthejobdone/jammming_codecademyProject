# Jammming 
Portfolio project for Codecademy skill path "Create a Front-End App with React".

The purpose is to build a Spotify integration web app using React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Requirements
- Build a web app using React
- Version control your application with Git and host the repository on GitHub
- Integrate with Spotify or another API
- Deploy your application
- Write a README (using Markdown) that documents your project, including:
    - The purpose of your project
    - Technologies used
    - Features
    - Future work

### Required Features
- Users can search for songs by song title.
    - You can also include functionality to search by other attributes like artist’s name, genre, etc.
- Users can see information about each song like title, artist, and album for songs they queried
    - You can also include other information – the design is up to you
- Users can export their custom playlist to their personal Spotify account

## Technologies Used
- HTML
- CSS
- React Bootstrap
- JavaScript
- React
- HTTP Requests and Responses
- Spotify API
- OAuth 2.0

## Features Implemented
- Static SearchBar and SearchResults (replaces requested "Tracklist") components
- Static Track component
- Footer component
- mock API
- Track Listing in The Component Tree
- unidirectional dataflow 
- Playlists in The Component Tree
    - Static Playlist Component
    - Name/Rename input
    - Save to Spotify button
    - Tracks in Playlist with remove buttons
- Styling api
- Spotify API
  - Save playlist to user acct
  - Search function
  - Add/delete songs from playlist (for playlists created by the app)
  - Rename playlist (for the current playlist created by the app)

## In Progress
- Bug fixing
- 

## Future Work
- Test and debug
  - Bug #001 [#SOLVED]: logged in at open but getting "access token expired" msg. Error causes no visible effect. Need a try/catch or something to run refreshToken before trying again and some kind of report on the error alert on-screen so the user isn't just dumbfounded.
  - Bug #002: RefreshToken api is not functioning
  - Bug #003: Uncaught runtime error when searching by artist or album.
    <!--SpotifyWebAPI.js:72 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'items')
      at processResponse (SpotifyWebAPI.js:72:1)
      at searchSpotify (SpotifyWebAPI.js:64:1)
      processResponse	@	SpotifyWebAPI.js:72
      searchSpotify	@	SpotifyWebAPI.js:64
      await in searchSpotify		
      handleSearch	@	App.js:44
      handleSubmit	@	SearchBar.js:19 -->
- Review Project
- Deploy on gh-pages
- Refactor to allow non-track results
    - Create Track, Artist, and Album components
    - Each result will be one of the 3 components depending on result type
    - Track Result clicks to add to playlist
    - Artist Result with click to search for artist tracks
    - Album Result with click to search for album tracks
- Refactor Artist and Album components to include option to add to playlist the top 5 tracks from artist or add full album instead of searching

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
