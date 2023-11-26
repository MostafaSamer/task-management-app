import EmptyList from "components/atoms/EmptyList";
import { render, screen } from "@testing-library/react";

describe('Alert Component', () => {
    it('renders the alert with the provided message and type', () => {

        const message = 'No tasks is added, Start add tasks!';

        render(
            <EmptyList />
        );

        const alertMessage = screen.getByText(message);

        expect(alertMessage).toBeInTheDocument();
    });
});