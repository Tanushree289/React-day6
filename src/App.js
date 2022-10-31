import './App.css';

function App() {
  return (
    <div>
    <h2 style={{textAlign:"center"}}>React Interview Preparation Day6</h2>
    <h4>1.What is an event in react?</h4>
    <p>An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.</p>
    <p>The React onClick event handler enables you to call a function and trigger an action when a user clicks an element, such as a button, in your app. Event names are written in camelCase, so the onclick event is written as onClick in a React app. In addition, React event handlers appear inside curly braces.</p>
    <hr />

    <h4>2.What is memory leak and how to overcome?</h4>
    <p>Memory leaks in React applications are primarily a result of not canceling subscriptions made when a component was mounted before the component gets unmounted. These subscriptions could be a:</p>
    <p>DOM Event Listener</p>
    <p>WebSocket Subscription</p>
    <p> to avoid memory leaks on a DOM Event Listener, but the process is pretty similar for a WebSocket Subscription.Basically, when we add an Event Listener in React, we need to remove them in order to avoid memory leaks.</p>
    <p>To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.</p>
    <hr />

    <h4>3.Do you prefer function-based or class component and why ?</h4>
    <p>Nothing is better, because both have pros and cons. But class components are important to understand React flow and lifecycle methods. The new learner should practice React using class components. Once they are familiar with class components, they can learn and use functional components.</p>
    <p>functional components, we use hooks (useState) to manage the state. If you write a function component and realise you need to add some state to it, previously you had to convert it to a class component.</p>
    <p>In the case of class components, when the state of the component is changed then the render method is called. Whereas, function components render the interface whenever the props are changed.</p>
    <hr />

    <h4>4.Explain reducer as pure function in redux</h4>
    <p> In redux, the reducers are the pure functions that contain the logic and calculation that needed to be performed on the state. These functions accept the initial state of the state being used and the action type. It updates the state and responds with the new state.</p>
    <p>Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state.</p>
    <p>Reducer's work is to return the updated state and to also describe how the state changes.</p>
    <p>Syntax:(State,action) = newState</p>
    <hr />

    <h4>5.Why do we use redux thunk?</h4>
    <p>Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises. One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request.</p>
    <p>Thunk allows us to dispatch actions manually, which gives us the power to incorporate some logic or run some asynchronous code before dispatching an action.</p>
    <p>The function returned from action is called a thunk function which is called with two arguments : </p>

    <p>1. dispatch: It is a method used to dispatch actions, that can be received by reducers. </p>
    <p>2. getState: It gives access to store inside the thunk function.</p>

    <p>A thunk function may contain any arbitrary logic, sync, or async, and can call dispatch or getState at any time. Before moving any further let's understand the difference between the flow of redux with and without thunk.</p>
    <hr />

    <h4>6.What do you know about NPM?</h4>
    <p>NPM (Node Package Manager) is the default package manager for Node.js and is written entirely in Javascript. Developed by Isaac Z. Schlueter, it was initially released in January 12, 2010. NPM manages all the packages and modules for Node.js and consists of command line client npm. It gets installed into the system with installation of Node.js. The required packages and modules in Node project are installed using NPM.</p>
    <p>npm is an abbreviation used for the node package manager. It is a package manager for JavaScript. It is the default package manager that comes with NodeJS when you install it</p>
    <p> It consists of a command-line interface and an online database of public packages and private packages that are paid which is called the npm Registry.</p>
    <p>A package contains all the files needed for a module and modules are the JavaScript libraries that can be included in Node project according to the requirement of the project.NPM can install all the dependencies of a project through the package.json file. It can also update and uninstall packages. In the package.json file, each dependency can specify a range of valid versions using the semantic versioning scheme, allowing developers to auto-update their packages while at the same time avoiding unwanted breaking changes.</p>
    </div>
  );
}

export default App;
