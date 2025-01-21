import { render } from '@testing-library/react';
import { Chat } from '@/components/Chat';
import { useChat } from 'ai/react';

jest.mock('ai/react', () => ({
  useChat: jest.fn(),
}));

describe('Chat', () => {
  const mockUseChat = useChat as jest.MockedFunction<typeof useChat>;

  beforeEach(() => {
    mockUseChat.mockReturnValue({
      messages: [],
      handleInputChange: jest.fn(),
      handleSubmit: jest.fn(),
      input: '',
      setInput: jest.fn(),
      error: new Error(),
      append: jest.fn(),
      reload: jest.fn(),
      stop: jest.fn(),
      addToolResult: jest.fn(),
      setMessages: jest.fn(),
      isLoading: false,
      setData: jest.fn(),
      id: 'mock-id',
    });
  });

  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Chat conversationId="123" />
    );

    expect(getByPlaceholderText('Enter your needs...')).toBeInTheDocument();
    expect(getByText('Tell what kind of services you need...')).toBeInTheDocument();
  });
});