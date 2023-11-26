import CtaButton from "components/atoms/CtaButton";
import { fireEvent, render, screen } from "@testing-library/react";

describe('CtaButton Component', () => {
    it('renders the button with the provided message and type', () => {

        const text = 'Sign up';
        const style = 'primary';

        render(
            <CtaButton text={text} style={style} />
        );

        const buttonText = screen.getByText(text);
        const buttonWrapper = screen.getByTestId('buttonTestWrapper');

        expect(buttonText).toBeInTheDocument();
        expect(buttonWrapper).toHaveClass(style);
    });

    it('calls the onClick function when the button is clicked', () => {
        
        const text = 'Click me';
        const style = 'primary';
        const onClick = jest.fn();
    
        const { getByTestId } = render(
          <CtaButton text={text} style={style} onClick={onClick} />
        );
    
        fireEvent.click(getByTestId('buttonTestWrapper'));
    
        expect(onClick).toHaveBeenCalledTimes(1);
      });
});