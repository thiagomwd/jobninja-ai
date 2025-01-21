import { render } from '@testing-library/react';
import { Message } from '@/components/Message';

describe('Message', () => {
  it('renders user message correctly', () => {
    const { getByText } = render(
      <Message content="Hello, world!" isUserMessage={true} />
    );

    expect(getByText('You')).toBeInTheDocument();
    expect(getByText('Hello, world!')).toBeInTheDocument();
  });

  it('renders assistant message correctly', () => {
    const { getByText } = render(
      <Message content="Hello, user!" isUserMessage={false} />
    );

    expect(getByText('Assistant')).toBeInTheDocument();
    expect(getByText('Hello, user!')).toBeInTheDocument();
  });
});