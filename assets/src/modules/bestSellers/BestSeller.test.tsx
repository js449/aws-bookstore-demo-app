/*
* Student Name: Jagdeep Singh
* Student ID: 1367758

* test case for BestSeller component
*/


import React from 'react';
import ReactDOM from 'react-dom';
import BestSellers from './BestSellers';


describe('BestSeller Component Test', () => {

    //Root container in which we will load our components
  let container: HTMLDivElement

   /**
   * BEfore each loop which will set the stage for our testing
   * Will run from every it statementand load the BestSellers component in it
   */
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<BestSellers />, container);
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
* testing the number of div elements with heading in the page
* Selecting the container where all the headings named h3 of the page available
* comparing the heading with the expecting heading which is TOP 20 best sellers.
*/
  it('Top 20 best sellers', () => {
    const h3 = container.querySelector('div.container-category > h3');
    expect(h3.textContent).toEqual("Top 20 best sellers");
  });

});