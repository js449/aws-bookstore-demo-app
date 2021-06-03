/*
* Student Name: Jagdeep Singh
* Student ID: 1367758

* All test cases for Login component
*/

import React from 'react';
import Login from './Login';
import ReactDOM from 'react-dom';


describe('Login Component Test', () => {
//Root container in which we will load our components
  let container: HTMLDivElement

  /**
   * BEfore each loop which will set the stage for our testing
   * Will run from every it statementand load the login component in it
   */
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Login />, container);
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

  //testing the numper of login inputs in login form
  it('Number of inputs in form', () => {
      //Selecting the container where all the inputs of the page available
    const inputs = container.querySelectorAll('input');
    //checking the length of the the inputs with expecting length.
    expect(inputs).toHaveLength(2);
  });

});