/*
* Student Name: Jagdeep Singh
* Student ID: 1367758

* test case for PastPurchases component
*/

import React from 'react';
import ReactDOM from 'react-dom';
import PastPurchases from './PastPurchases';


describe('PastPurchases Component Test', () => {
//Root container in which we will load our components
  let container: HTMLDivElement

  /**
   * BEfore each loop which will set the stage for our testing
   * Will run from every it statementand load the PastPurchases component in it
   */
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<PastPurchases />, container);
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
* comparing the heading text content with the expecting heading which is Past purchases.
*/

  it('Heading is correct', () => {
      const heading = container.querySelector("div.white-box > h3");
      expect(heading?.textContent).toEqual("Past purchases");
  });

  /**
* testing the number of div elements with link 'a' in the page
* Selecting the container where all the link named a of the page available
* //checking the length of the the links with expecting length.
*/
  it('Test links to Bestseller and Cart is present', () =>{
    const links = container.querySelectorAll("div.well-bs > a");
    expect(links).toHaveLength(2);
  });
});