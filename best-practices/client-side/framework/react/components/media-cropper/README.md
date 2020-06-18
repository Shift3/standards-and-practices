# Magtek Card Reader Middleware
Crop media including images and video in React.

## Installation

TODO: include installation instructions

## Running the Demos

First install the `devDependencies` with

```
npm install
```

Next, start the project with

```
npm start
```

This will start the demo at [`localhost:3000`](http://localhost:3000)

## TODOS

- Write installation instructions
- Properly handle animated GIFs
  - This will be a little tricky as the `HTMLImageElement` does not understand the frames
  - We will likely need another package such as [omggif](https://www.npmjs.com/package/omggif)
- Add controls for seeking in animated media to ensure that all frames look good
- Add mobile controls, especially for zooming
- Improve error handling

## Potential Improvements

- Add ability to also edit start and stop time of animated media
- Select a background color
- Show full media while panning and zooming
  - Instead of cutting off everything, simple show a border
- Show a loading indicator when loading new media
- Move rendering of animated media to background process
