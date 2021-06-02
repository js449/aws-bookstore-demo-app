/*
* Student Name: Jagdeep Singh
* Student ID: 1367758

* test case for BestSeller component
*/


import React from 'react';
import ReactDOM from 'react-dom';
import BestSellers from './BestSellers';


describe('BestSeller Component Test', () => {

  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<BestSellers />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Top 20 best sellers', () => {
    const cl = container.querySelector('div.container-category > h3');
    expect(cl.textContent).toEqual("Top 20 best sellers");
  });

//   it('Check if form is present', () => {
//     const forms = container.querySelectorAll('form')
//     expect(forms).toHaveLength(1);
//   });

//   it('Check if sign in button is present', () => {
//     const buttons = container.querySelectorAll('button')
//     expect(buttons).toHaveLength(1);
//   })
});