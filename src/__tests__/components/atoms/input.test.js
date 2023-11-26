import Input from "components/atoms/input";
import { render, fireEvent, screen } from '@testing-library/react';

describe('Input Component', () => {
  const defaultProps = {
    accessor: 'testInput',
    label: 'Test Input',
    type: 'text',
    value: '',
    onChange: jest.fn(),
    customStyle: {},
    inline: false,
    options: [],
    errors: ''
  };

  it('renders text input correctly', () => {
    const { getByLabelText } = render(<Input {...defaultProps} />);
    const inputElement = getByLabelText('Test Input:');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('renders email input correctly', () => {
    const { getByLabelText } = render(<Input {...defaultProps} type="email" />);
    const inputElement = getByLabelText('Test Input:');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  it('renders password input correctly', () => {
    const { getByLabelText } = render(<Input {...defaultProps} type="password" />);
    const inputElement = getByLabelText('Test Input:');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  it('renders checkbox input correctly', () => {
    const { getByLabelText } = render(<Input {...defaultProps} type="checkbox" />);
    const inputElement = getByLabelText('Test Input:');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'checkbox');
  });

  it('renders dropdown input correctly', () => {
    const { getByLabelText } = render(
      <Input {...defaultProps} type="dropdown" options={[{ value: '1', label: 'Option 1' }]} />
    );
    const inputElement = getByLabelText('Test Input:');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe('SELECT');
  });

  it('calls onChange function when input value changes', () => {
    const { getByLabelText } = render(<Input {...defaultProps} />);
    const inputElement = getByLabelText('Test Input:');

    fireEvent.change(inputElement, { target: { value: 'new value' } });

    expect(defaultProps.onChange).toHaveBeenCalledWith('testInput', 'new value');
  });

  it('renders errors correctly', () => {
    const { getByText } = render(<Input {...defaultProps} errors="This is an error" />);
    const errorElement = getByText('This is an error');

    expect(errorElement).toBeInTheDocument();
  });
});
