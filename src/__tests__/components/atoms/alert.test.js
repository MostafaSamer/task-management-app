import Alert from "components/atoms/Alert";
import { render, screen } from "@testing-library/react";

describe('Alert Component', () => {
    it('renders the alert with the provided message and type', () => {

        const message = 'This is a test message';
        const type = 'success';

        render(
            <Alert message={message} type={type} />
        );

        const alertMessage = screen.getByText(message);
        const alertWrapper = screen.getByTestId('alertTestWrapper');

        expect(alertMessage).toBeInTheDocument();
        expect(alertWrapper).toHaveClass(type);
    });
});