import { render } from '@testing-library/react';
import { ConversationMessages } from '@/components/ConversationMessages';
import { Message } from 'ai';

describe('ConversationMessages', () => {
  const messages: Message[] = [
    { id: '1', content: 'Hello, world!', role: 'user' },
    { id: '2', content: 'Hello, user!', role: 'assistant' },
  ];

  it('renders messages correctly', () => {
    const { getByText } = render(<ConversationMessages messages={messages} />);

    expect(getByText('Hello, world!')).toBeInTheDocument();
    expect(getByText('Hello, user!')).toBeInTheDocument();
  });

  it('renders empty state correctly', () => {
    const { getByText } = render(<ConversationMessages messages={[]} />);

    expect(getByText('Tell what kind of services you need...')).toBeInTheDocument();
    expect(getByText('Ask your first question to get started.')).toBeInTheDocument();
  });
});