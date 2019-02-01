import React from "react";
import { Text, View } from "react-native";

/**
 * Hey! You forgot to import { Component }! 
 * 
 * Actually, this is what is called a functional or "stateless" componennt. As its name suggests,
 * it does not hold any state. It's "technically" a function, so we don't need to import Component.
 * You can't call setState here or use the "this" reference. That sounds...  Not as good as the class, right? 
 * Well, if you don't need any state or you want to break your code up into smaller
 * parts, this is the way to go! It's more efficient, too.
 */

const BasicLayoutFunctional = props => {
    /**
     * So, a little about the header here. We declare functional components const
     * because they're not meant to be reassigned to.
     * 
     * You'll notice that this is an ES6 arrow function! It takes one argument, props,
     * which is an object containing the properties given to this component, and returns
     * a single top level component. Properties are accessible from props instead of this.props.
     */

    /**
     * No constructor? No render?! 
     * 
     * Easy! We just return the component that we built here! 
     * 
     * I can't even give this thing functions?! What gives?
     * 
     * That's because this component itself is a function! We can't declare a function within
     * a function, so you'll need to declare it outside of the component, but in this same file.
     */
    return(
        /**
         * Let's pretend that a parent component gave us a hello message as a prop. We'll display it
         * as we did in the class version.
         */
        <View>
            <Text>
                {props.helloMessage}
            </Text>
        </View>
    );

    /**
     * And that's it!  This is visually exactly the same as BasicLayoutClass.
     */
}

export default BasicLayoutFunctional;