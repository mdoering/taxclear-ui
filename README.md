# Taxonomic Clearing House UI
UI driven by the taxclear-ws API using React and the following core technologies:

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging. Lean alternative to [Facebook's Flux](https://facebook.github.io/flux/docs/overview.html).| [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux), [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux), [Pluralsight Course](http://www.pluralsight.com/courses/react-redux-react-router-es6)|
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack2](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
| [TrackJS](https://trackjs.com/) | JavaScript error tracking. | [Free trial](https://my.trackjs.com/signup)|  
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more. | [Pluralsight Course](https://www.pluralsight.com/courses/better-css)|
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |


## Running the webapp 
### Requirements
1. **[Node 6.0 or greater](https://nodejs.org)**
1. **[yarn](https://yarnpkg.com/lang/en/)**
1. **[Disable safe write in your editor](http://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write)** to assure hot reloading works properly.


### Install and start dev  
`yarn install`
`npm start -s`
This will run the automated build process, start up a webserver, and open the application in your default browser. 
When doing development with this kit, this command will continue watching all your files. 
Every time you hit save the code is rebuilt, linting runs, and tests run automatically. 

Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.

### Build and deploy to production
`npm run build`
  
This will build the project for production. It does the following:

 - Minifies all JS
 - Sets NODE_ENV to prod so that React is built in production mode
 - Places the resulting built project files into /dist. (This is the folder you'll expose to the world).

## Development guidelines
### Project structure
Follow a [fractal project structure](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) 
underneath the primary routes that allows webpack's code splitting to be applied.    

```
├── .babelrc                    # Configures Babel
├── .editorconfig               # Configures editor rules
├── .eslintrc                   # Configures ESLint
├── .gitignore                  # Tells git which files to ignore
├── .istanbul.yml               # Configure istanbul code coverage
├── .npmrc                      # Configures npm to save exact by default
├── .travis.yml                 # 
├── appveyor.yml                # 
├── package.json                # yarn/npm Dependencies
├── yarn.lock                   # yarn state, don't touch
├── webpack.config.dev.js       # Configures webpack for development builds
├── webpack.config.prod.js      # Configures webpack for production builds
├── dist                        # Folder where the build script places the built app. Use this in prod.
├── src                         # Application source code
│   ├── index.html              # Main HTML page container for app
│   ├── index.js                # Application bootstrap and rendering
│   ├── components              # Global Reusable Presentational Components
│   ├── containers              # Global Reusable Container Components
│   ├── layouts                 # Components that dictate major page structure
│   │   └── Layout.js           # CoreLayout which receives children for each route
│   │   └── Layout.scss         # Styles related to the CoreLayout
│   │   └── index.js            # Main file for layout
│   ├── routes                  # Main route definitions and async split points
│   │   ├── routes.js           # Bootstrap main application routes with store
│   │   ├── Home                # Fractal route
│   │   │   ├── index.js        # Route definitions and async split points
│   │   │   ├── assets          # Assets required to render components
│   │   │   ├── components      # Presentational React Components
│   │   │   └── routes **       # Fractal sub-routes (** optional)
│   │   ├── About               # Fractal route
│   │   │   ├── index.js        # Route definitions and async split points
│   │   │   ├── assets          # Assets required to render components
│   │   │   ├── components      # Presentational React Components
│   │   │   └── routes **       # Fractal sub-routes (** optional)
│   │   └── Name                # Fractal route
│   │       ├── index.js        # Counter route definition
│   │       ├── container       # Connect components to actions and store
│   │       ├── actions         # Collections of reducers/constants/actions
│   │       └── routes **       # Fractal sub-routes (** optional)
│   ├── store                   # Redux-specific pieces
│   │   ├── createStore.js      # Create and instrument redux store
│   │   └── reducers.js         # Reducer registry and injection
│   ├── styles                  # Application-wide styles, typically written in Sass
│   └── utils                   # Plain old JS objects. No framework specific code here.
└── tools                       # Node scripts that run build related tools
    ├── analyzeBundle.js        # Analyzes the webpack bundle
    ├── build.js                # Runs the production build
    ├── chalkConfig.js          # Centralized configuration for chalk (adds color to console statements)
    ├── distServer.js           # Starts webserver and opens final built app that's in dist in your default browser
    ├── nodeVersionCheck.js     # Confirm supported Node version is installed
    ├── srcServer.js            # Starts dev webserver with hot reloading and opens your app in your default browser
    ├── startMessage.js         # Display message when development build starts
    └── testCli.js              # 
  
