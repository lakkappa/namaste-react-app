# namaste-react-app
It is a react application using the namaste react core concepts

# parcel
- Dev build
- Local server
- HMR = Hot Module Replacement
- File watching algorithm - written by C++
- Caching - Faster builds
- Image optimization
- Minification
- Bundling
- Compressing
- Production build
- Code splitting
- Differential Bundling - supports older browsers
- Error handling
- HTTPs
- Tree shaking - remove unused files

# parcel run command
- npx parcel index.html, This is for dev build
- npx parcel build index.html, This is for production build.







# HOC - Higher Order Component is a function that takes a component and returns a component.
- It's Enhancing the existing component, I mean it will add more data on top up existing component.
- It's a pure function, Means it will not changed the existing data.

# controlled and uncontrolled component
- In controlled comp, state variable is depending on parent component
- I want to parent to controlled his own childrens.

- In Uncontrolled comp, comp is controlling by own, means it's having the own state.

# lifting the state
- RestaurantsCategory.js and RestaurantsMenu.js file combinations.

# useContext
- solving the prop driling issue, we can use the useContext, It's a basically global state object, we can use it in our app, wherever you want.

# 1.React Redux
- When you press the Add button, It dispatch the action, Which calls the reducer function, And   Modifies the slice of a redux store(store).
- Add Button ->  Dispatch the Action  -> Calls the Reducer -> Update the slice(Have some data).
- How to read data from cart(slice) -> we have to use the Selector for reading the data from store.
- 1. Send data to store -> Once clike on the Add button, It's dispacth the action then call's the reducer function, which updates the slice of a redux store.
- 2. Receive data from store -> Our component(ex: Header comp) is subscribed to store, then using the selector as inbuilt func, we can recived the data in our component(ex: Header comp).

# 2. Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our stor to our app
- create slice (cartSlice)
- dispacth(action)
- selector

# Testing
- Unit Testing -> Testing for small component.
- Integration Testing -> There are multiple components involed in the testing.
- End to End (E2E) Testing -> Testing for complete the user flow.
  - E2E requires external tools like, cypress.

# Testing setup
- Install React Testing Library
- Install jest
- Install Babel dependecies
- Configure Babel
- Configure Paracel config file to use for disablling the default configuration.
- Jest configuration
    - npx jest --init
- Install jsdom library
- Install @babel/preset-react  - to make JSX work in test case
- Include @babel/preset-react inside my babel.config.js file
- Install @testing-library/jest-dom