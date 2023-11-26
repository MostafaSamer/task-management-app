import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM for additional matchers
import Footer from 'components/molecules/Footer';

describe('Footer Component', () => {
  it('renders the Footer component with the correct content and link', () => {
    // Arrange
    render(<Footer />);

    // Act
    const footerText = screen.getByText(/Created by/i);
    const linkElement = screen.getByRole('link', { name: /Mostafa Samir/i });

    // Assert
    expect(footerText).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://github.com/MostafaSamer');
    expect(linkElement).toHaveAttribute('target', '_blank');
  });

  // Add more test cases based on the component's behavior

  // Example: Test styling
  it('applies the correct styles to the Footer component', () => {
    // Arrange & Act
    render(<Footer />);
    
    // Assert
    const footerWrapper = screen.getByTestId('footer-wrapper');
    const footer = screen.getByTestId('footer');
    
    expect(footerWrapper).toHaveClass('footerWrapper');
    expect(footer).toHaveClass('footer');
  });
});
