/*
* Student Name: Jagdeep Singh
* Student ID: 1367758
* All test cases for signup component
*/
import React from 'react';
import Signup from './Signup';
import ReactDOM from 'react-dom';


describe('Singup test cases',  () => {
    //Root container in which we will load our components
    let container: HTMLDivElement;

    /**
   * BEfore each loop which will set the stage for our testing
   * Will run from every it statementand load the signup component in it
   */
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Signup/>, container);
    });

    
  /**
   * After each loop run after every it statement and cleanup our test best and destroy
   * all the resources used by the test
   * 
   */
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

      /**
       * testing the number of inputs in the signup form
       * Selecting the container where all the inputs of the page available
       * checking the length of the the inputs with expecting length.
       */
    it('Number of inputs', () => {  
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(3);
    });

        /**
       * testing the if the button is there
       * Selecting the container where all the inputs of the page available
       * checking the length of the the inputs with expecting length.
       */
    it('Check if button is there', () => {
        const button = container.querySelectorAll("button");
        expect(button).toHaveLength(0);
    });

});