/*
* All test cases for signup component
*/
import React from 'react';
import Signup from './Signup';
import ReactDOM from 'react-dom';


describe('Singup test cases',  () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Signup/>, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('Number of inputs', () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(3);
    });

    it('Check if button is there', () => {
        const button = container.querySelectorAll("button");
        expect(button).toHaveLength(1);
    });

    it('Check if password message is there', () => {
        const span = container.querySelectorAll('span');
        expect(span).toHaveLength(1);
    });

});