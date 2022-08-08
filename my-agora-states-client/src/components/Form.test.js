import { fireEvent, render, screen } from '@testing-library/react'; 
import { userEvent } from '@testing-library/user-event'
import { Form } from "./Form"

describe('Test Button component', () => {
    it('click from input button', () => {

        render(<Form/>);
        const onButtonElement = screen.getByRole('button', {name:'submit'});
        // fireEvent.click(onButtonElement);
        expect(onButtonElement).toBeEnabled();
    });
    it('click from input button', () => {

        render(<Form/>);
        const onButtonElement = screen.getByRole('button', {name:'submit'});
        // fireEvent.click(onButtonElement);
        expect(onButtonElement).toBeInTheDocument();
    }) 
})