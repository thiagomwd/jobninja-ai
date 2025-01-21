import { render, fireEvent } from '@testing-library/react';
import { MessageForm } from '@/components/MessageForm';

describe('MessageForm', () => {
  const mockHandleInputChange = jest.fn();
  const mockHandleSubmit = jest.fn((e) => e.preventDefault());
  const mockSetInput = jest.fn();

  it('renders correctly', () => {
    const { getByPlaceholderText, getByRole } = render(
      <MessageForm
        input=""
        handleInputChange={mockHandleInputChange}
        handleSubmit={mockHandleSubmit}
        setInput={mockSetInput}
      />
    );

    expect(getByPlaceholderText('Enter your needs...')).toBeInTheDocument();
    expect(getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  it('calls handleSubmit on form submission', () => {
    const { getByRole } = render(
      <MessageForm
        input=""
        handleInputChange={mockHandleInputChange}
        handleSubmit={mockHandleSubmit}
        setInput={mockSetInput}
      />
    );

    fireEvent.click(getByRole('button', { name: /send/i }));
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  it('calls handleInputChange on textarea change', () => {
    const { getByPlaceholderText } = render(
      <MessageForm
        input=""
        handleInputChange={mockHandleInputChange}
        handleSubmit={mockHandleSubmit}
        setInput={mockSetInput}
      />
    );

    fireEvent.change(getByPlaceholderText('Enter your needs...'), {
      target: { value: 'New message' },
    });
    expect(mockHandleInputChange).toHaveBeenCalled();
  });
});