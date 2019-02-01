/**
 * ES6 gives us access to imports! You can still use require(), and you may want to, when
 * appropriate.  Reserve this for situations where you don't need all your imports on load
 * and require them inline when they're needed. Otherwise, just use import and put all of
 * them at the top of your file so they're easy to find.
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

/**
 * Okay...  What's up with the braces? Even if you didn't ask that, I'm telling you anyhow
 * because it's important. The difference between the ones with the braces and the ones
 * without is this: If the component is exported by name in the module's index.js file,
 * that means you can pick and choose which parts of the module you want. You may only
 * want one component or utility from a library that has like 100. In our class here,
 * I'm importing Text and View by name from the react-native library. Some components
 * offer this and some don't.  Always check the API before coding.
 */

class BasicLayoutClass extends Component {
    /**
     * This is a class component. When you add the "class" directive and extend Component,
     * you can make your own Component. Since this component is a class, we can give it
     * some state!  Functional components, by contrast, cannot have state.  Let's give
     * this class some initial state.  We do that in the constructor.
     */

    constructor(props){
        /**
         * Wait, props?  Unlike the ones on boats, these are the properties being given
         * to our component.  They can be of any type and be as numerous as your desire.
         * Our constructor will take in the props and assign them to this.props so you
         * can access them in your class.
         */

        // Always call super on the props.
        super(props);

        /**
         * Here's the state that we gave our program to start with.  Just some variables
         * with different kinds of data.  This is an okay way to assign initial state, but
         * we can do better.
            this.state = {
                helloMessage: "Hello there!",
                numberOfHellos: 5,
                currentlySpeaking: false
            }
        */

        /**
         * Let's define what our initial state is, then assign it to this.state. Why would
         * we want to do this, though?  It seems like more code!  Well, if you ever want
         * to go back to the initial state, it's much easier than manually resetting every
         * piece of state.
         */
        this.initialState = {
            helloMessage: "Hello there!",
            numberOfHellos: 5,
            currentlySpeaking: false
        }

        /**
         * And now we just assign our inital state to this.state. Be warned, this is the only
         * place in your component where you can directly modify state! You have to use this.setState
         * everywhere else, but don't worry, this is to your overall benefit, because setState
         * will let your component know if changes were made that will make it need to re-render
         * so you don't have to do it yourself.
         */

        this.state = this.initialState;
    }

    /**
     * This is another difference between Class and Functional components. Class components have
     * a render function! The render function expects one component to be returned to it.  ...What?
     * One component?  How am I supposed to build anything with that?! Well, you should know that
     * React/Native loves component composition! Render wants one component, sure, but that's at
     * the top level.  I'll show you in the next example.
     */

    render(){
        return(
            <View>
                <Text>
                    {/* We can execute JS between braces! */}
                    {this.state.helloMessage}
                </Text>
            </View>
        );
    }

    /**
     * There are two components being used here: View and Text. See how Text is within the View?
     * Text is the child component of View.  Whoa.  So, if you put anything between a component's
     * opening and closing tags, it becomes a child of that component!  View chooses to render
     * all of its children, so you can pass in as many child components as you want! In fact, you
     * can even tell your own components to render child components that have been passed in (you
     * can find them in this.props.children), but we'll save this for a more advanced look at classes.
     * Anyhow, because of the fact that there's only one top level component, View, render is happy.
     */

}

/**
 * We want other components we're working with to know about our class, so let's export it by name!
 */

 export default BasicLayoutClass;