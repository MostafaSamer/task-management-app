import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM for additional matchers
import Card from 'components/molecules/Card';

describe('Card Component', () => {
  it('renders the Card component with title and content', () => {
    // Arrange
    const title = 'Test Card';
    const content = 'Card Content';

    // Act
    const { getByText } = render(<Card title={title}>{content}</Card>);

    // Assert
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
  });

  it('renders the Card component with only title', () => {
    // Arrange
    const title = 'Test Card';

    // Act
    const { getByText, queryByText } = render(<Card title={title} />);

    // Assert
    expect(getByText(title)).toBeInTheDocument();
    expect(queryByText('Card Content')).toBeNull();
  });

  // Add more test cases based on the component's behavior

  // Example: Test styling
  it('applies the correct styles to the Card component', () => {
    // Arrange
    const title = 'Test Card';

    // Act
    const { container } = render(<Card title={title} />);
    const cardWrapper = container.firstChild;

    // Assert
    expect(cardWrapper).toHaveClass('cardWrapper');
    expect(cardWrapper.firstChild).toHaveClass('card');
    expect(container.querySelector('.title')).toBeInTheDocument();
    expect(container.querySelector('.content')).toBeInTheDocument();
  });
});
