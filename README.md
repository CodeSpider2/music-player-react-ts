# Web Music Player

This is a web-based music player built using React, TypeScript, Node.js, and Tailwind CSS. It allows users to listen to their favorite songs, create playlists, and enjoy a seamless music streaming experience.

## Features

- **Song Playback:** The music player provides smooth playback of audio files in various formats, such as MP3, WAV, and FLAC.
- **Playlist Creation:** Users can create personalized playlists by adding their favorite songs to collections.
- **Play Controls:** Standard controls, including play, pause, next, previous, and shuffle, are available for an intuitive user experience.
- **Progress Bar:** A progress bar indicates the current playback position and allows users to seek within a track.
- **Volume Control:** Users can adjust the volume of the audio playback using a slider control.
- **Responsive Design:** The player is optimized for different screen sizes, ensuring compatibility across desktop and mobile devices.
- **Search Functionality:** Users can search for songs or artists to quickly find and play their desired tracks.
- **Music Library Management:** The application supports managing a music library by adding, deleting, and organizing songs.
- **Drag and Drop:** Users can rearrange songs within a playlist or drag and drop tracks from one playlist to another.
- **User Authentication:** The player includes a user authentication system to provide personalized experiences and maintain individual playlists.
- **Multiple Themes:** The interface offers multiple themes for customization, allowing users to choose their preferred visual style.

## Installation

Follow the steps below to set up and run the web music player locally:

1. Clone the repository: `git clone https://github.com/AMO15310/web-music-player.git`
2. Navigate to the project directory: `cd web-music-player`
3. Install dependencies: `npm install`
4. Build the project: `npm run build`
5. Start the development server: `npm start`

The music player should now be accessible at `http://localhost:3000`.

## Configuration

The web music player requires some configuration to function properly. Follow the steps below to set up the necessary environment variables:

1. Create a `.env` file in the project's root directory.
2. Add the following environment variables to the file:

   ```
   REACT_APP_API_URL=your-api-url
   REACT_APP_API_KEY=your-api-key
   ```

   Replace `your-api-url` with the URL of your music streaming API, and `your-api-key` with your API key or authentication token.

3. Save the `.env` file.

## Technologies Used

- React
- TypeScript
- Node.js
- Tailwind CSS

## Acknowledgments

The web music player was created with inspiration from various open source projects and libraries. Special thanks to the developers and contributors of the following:

- React (https://reactjs.org/)
- TypeScript (https://www.typescriptlang.org/)
- Node.js (https://nodejs.org/)
- Tailwind CSS (https://tailwindcss.com/)

## License

This project is licensed under the [MIT License](LICENSE).
