import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './';

describe('App', () => {
    test('button click event', () => {
        const { getByText } = render(<App />);
        const button = getByText('Click me');

        fireEvent.click(button);

        expect(console.log).toHaveBeenCalledWith('Button clicked!');
    });
});
