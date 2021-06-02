/*
* Student Name: Jagdeep Singh
* Student ID: 1367758

* test case for PastPurchases component
*/

import React from 'react';
import ReactDOM from 'react-dom';
import PastPurchases from './PastPurchases';


describe('PastPurchases Component Test', () => {

  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<PastPurchases />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Heading is correct', () => {
      const heading = container.querySelector("div.white-box > h3");
      expect(heading?.textContent).toEqual("Past purchases");
  });

  it('Test links to Bestseller and Cart is present', () =>{
    const links = container.querySelectorAll("div.well-bs > a");
    expect(links).toHaveLength(2);
  });
});