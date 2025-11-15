# TYAP App Presentation

A lightweight React presentation/demo app showcasing the TYAP passenger and driver interfaces, payment system and biometric device components. This repository is intended as a UI demo and starting point for building the TYAP front-end experience.

**Status:** Demo / Presentation — not a production-ready product.

**Tech stack:** React, CRACO, Tailwind CSS, Lucide icons

**Key files:**
- `craco.config.js` : CRACO configuration (used instead of ejecting CRA)
- `tailwind.config.js` : Tailwind CSS configuration
- `public/` : Static assets and HTML entry
- `src/` : React source files and components

## Project overview

This project contains a small React app that demonstrates the following UI pieces:
- Passenger-facing app (`src/PassengerApp.jsx`)
- Driver dashboard (`src/DriverDashboard.jsx`)
- TYAP admin/dashboard (`src/TYAPDashboard.jsx`)
- Payment system demo (`src/PaymentSystem.jsx`)
- Biometric device component (`src/BiometricDevice.jsx`)

The codebase is organized as a presentational demo — use it to prototype flows or extract components into a larger project.

## Prerequisites
- Node.js (recommended >= 16)
- npm (or `pnpm`/`yarn`) — this README uses `npm` for examples.

On Windows PowerShell, run the commands below from the project root.

## Quick start (development)

Install dependencies:

```powershell
npm install
```

Start the development server (CRACO is used to run CRA with custom config):

```powershell
npm start
```

Open http://localhost:3000 in your browser. The dev server supports hot reloading.

## Available scripts
Scripts are defined in `package.json` and use CRACO as the wrapper for CRA.

- `npm start` : Start dev server (`craco start`)
- `npm run build` : Create production build (`craco build`)
- `npm test` : Run tests (`craco test`)
- `npm run eject` : Eject CRA (one-way operation)

Example build command (PowerShell):

```powershell
npm run build
```

## Tailwind CSS and CRACO
This project uses Tailwind CSS for styling. CRACO is used so we don't need to eject CRA to customize PostCSS/Tailwind settings. See `craco.config.js` and `tailwind.config.js` for configuration.

## Project structure

Top-level layout (important files only):

```
public/
  index.html
src/
  index.js
  App.js
  App.css
  index.css
  PassengerApp.jsx
  DriverDashboard.jsx
  TYAPDashboard.jsx
  PaymentSystem.jsx
  BiometricDevice.jsx
  reportWebVitals.js
  setupTests.js
```

## Component notes
- `PassengerApp.jsx`: UI for passenger flows.
- `DriverDashboard.jsx`: Driver controls and status views.
- `TYAPDashboard.jsx`: Admin / overview dashboard.
- `PaymentSystem.jsx`: Mock/demo payment UI and handling.
- `BiometricDevice.jsx`: Example biometric interaction component.

These files are intentionally simple and meant for demo/presentation. Feel free to refactor them into smaller components as you integrate into a larger app.

## Contributing
- Open an issue to discuss larger feature work.
- For small fixes, open a pull request with a short description and screenshots if UI changes are involved.

Guidelines:
- Keep changes focused and well-tested.
- If you add dependencies, include a short justification in the PR description.

## Troubleshooting
- If Tailwind styles don't appear, ensure `npm install` completed and the dev server was restarted after installing new packages.
- If `craco` commands fail, reinstall node modules with `rm -r node_modules; npm install` (Windows PowerShell: `Remove-Item -Recurse node_modules; npm install`).

## Next steps / suggestions
- Add a `README` per-component in `src/components/` if components grow.
- Add Storybook for interactive component demos.
- Add CI scripts for linting, tests and a build pipeline.

## License
No license specified. Add a `LICENSE` file to declare a license for this repository.

---

If you'd like, I can also:
- run the app locally and verify the dev server starts, or
- add a short CONTRIBUTING.md and/or CODE_OF_CONDUCT.md.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
