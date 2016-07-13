# intuit-ui-craft-demonstration
Test Project for Intuit

## Running the app
Clone this repository and run `npm install`. Then `npm run build` to build the application into dist. Open `dist/index.html` to view the app.


## Things that could be improved

- Not hardcoding API key into the app where it could be stolen, instead we'd use our own server to handle API requests
- Having that server also serve the page with server-side rendering
- Using a CSS preprocessor like LESS for cleaner, maintainable styles
- Minifying builds
- Being a little more conservative with our dependencies so the bundled JS size isn't as large (use lodash piecewise)
- Writing proper tests for redux reducers/actions, and react components
