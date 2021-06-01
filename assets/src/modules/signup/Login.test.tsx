import React from 'react';
import Login from './Login';
import ReactDOM from 'react-dom';


describe('Login Component Test', () => {

  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Login />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Number of inputs in form', () => {
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(2);
  });

  it('Check if form is present', () => {
    const forms = container.querySelectorAll('form')
    expect(forms).toHaveLength(1);
  });

  it('Check if sign in button is present', () => {
    const buttons = container.querySelectorAll('button')
    expect(buttons).toHaveLength(1);
  })
});