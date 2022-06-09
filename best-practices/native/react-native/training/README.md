# Table of contents
1. [Differences between React and React Native](#main-differences-between-utilizing-react-native-vs-react)
2. [React](#react)
3. [React Native](#react-native)
4. [React Components](#react-components)
5. [React Props](#props-to-react-for-creating-props)
6. [React State](#lets-talk-a-little-bit-about-state)
7. [ES6](#es6)
8. [Component Lifecycle](#speaking-of-lifecycle)

## Main differences between utilizing React Native vs React

React is generally described as a JavaScript library for building user interfaces by utilizing declarative components in a component-based architecture. React Native is a framework for building native applications using React. While both of these libraries use a similar approach to building user interfaces, React Native is designed to be used for native iOS and Android Development. Below, we will be discussing the main differences between React Native vs React.

## React

- Uses JSX elements that directly mimmick HTML elements right down to the props.
- React is a UI layer for developers to build their applications.
- Utilizes a virtual DOM to render components.
- Very small learning curve if you can use ES6.

## React Native

- Uses JSX elements that can *include* HTML elements but generally uses specific native components.
- React Native is a UI layer **and** a complete framework for building native applications on iOS and Android.
- Utilizes the device API to render components.
- Slightly more complex learning curve if you understand ES6, little-to-no learning curve coming from React.

## React Components
Are the building blocks of a React application. They help us to create reusable components that can be used in multiple places in our application. React components all have a lifecycle, access to props, and state. We will discuss what these things are below. One important thing to note about a React component is that it will almost always return a single JSX element. React components cannot return multiple JSX elements, if you have JSX elements that you need to include in the return statement you will need to wrap them all in a single JSX element in order for the application to run. In a functional component we just use a return statement to return our JSX element, in a class-based component we need to use a return statement in the `render()` method of our class.
## Props to React for creating Props
Props are the data that is passed into a component. We use props like you would use HTML attributes. Here is an example of an HTML element that has attributes:
```html
<button type="button" disabled="true">Click Me!</button>
```
The attributes of this button would be that the type is of button and disabled is true. This is the same way you could pass these attributes into a React component. Here is an example of a React component that has props:
```html
<MyFirstComponent title="Your Component" description="a good description">
```
You can see that we passed this component two props, title and description. In the component `MyFirstComponent` we would be able to access those props in the construtor or in a functional component - the parameters of the component. Here's how that would look in both types of components:
```javascript
// Class based component
class MyFirstComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      description: props.description
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
// Functional component
const MyFirstComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
```
Props allow developers to create reusable components that can be used in multiple places in the application since the data is cotrolled by the component that is calling it. Props are very similar to React, but they are not the same.

## Lets talk a little bit about state
React provides a very simple to understand markdown file that talks about the differences between State and Props [here](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md). 

> "State is a plain JavaScript object used by React to represent an information about the component’s current situation. It’s managed in the component (just like any variable declared in a function). The difference is while a “normal” variable “disappears” when their function exits, the state variables are preserved by React".

Tarak Maamar

Here are some examples of using and setting state:
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Initial State'
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={() => this.setState({ title: 'New Title' })}>
          Change Title
        </button>
      </div>
    );
  }
}

const MyFuncComponent = (props) => {
  let [title, setTitle] = useState('Initial State');
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={setTitle('New Title')}>
        Change Title
      </button>
    </div>
  );
};
```
In the Class Based Component that you see above, we are using the `setState` function to change the title in state. In the Functional Component that you see above, we are using the `useState` hook to change the title in state. `setState` is a function that takes in a JavaScript object and updates the state. `useState` is a function that returns an array of two values. The first value is the current state and the second value is a function that allows us to update the state.

## ES6
Learning React and React Native requires a good understanding of ES6, which is the 6th version of the ECMAScript programming language (JavaScript). Thanks to browser support we can now use ES6 in the browser, but most React applications utilize a library called Babel to transpile ES6 code into ES5 code. ES6 adds some amazing features that you will see pretty much everywhere in the React ecosystem. Below I will list some of those features.

## ES6 Features

- Destructuring
- let and const vs. var
- Arrow Functions
- Classes
- Spread and Rest

These features will become increasingly important to learn as you progress through your usage of React and its' lifecycle.

## Speaking of lifecyle

React and React Native give you the option to rely on the React lifecycle to make your code more dynamic. Thanks to the lifecycle we can trigger re-renders of our components when a value changes which allows us to keep data fresh. Below is a list of the lifecycle methods that React and React Native provide.

The most popular Class Based Component Lifecycle Methods
- [componentDidMount](https://reactjs.org/docs/react-component.html#componentdidmount)
- [componentDidUpdate](https://reactjs.org/docs/react-component.html#componentdidupdate)
- [componentWillUnmount](https://reactjs.org/docs/react-component.html#componentwillunmount)
- [componentWillMount](https://reactjs.org/docs/react-component.html#componentwillmount)
- [componentWillUpdate](https://reactjs.org/docs/react-component.html#componentwillupdate)
- [componentWillReceiveProps](https://reactjs.org/docs/react-component.html#componentwillreceiveprops)

The most popular Functional Component Lifecycle Methods
- [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
- [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)

All of these lifecycle methods allow developers to choose/create data that can cause a component to re-render. This is a big deal because it allows us developers to create interfaces that can change over time driven by either data or events.
