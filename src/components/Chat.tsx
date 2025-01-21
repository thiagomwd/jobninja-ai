
"use client";

interface ChatProps {
  conversationId: string;
}

import { useChat } from "ai/react";
import { ConversationMessages } from "./ConversationMessages";
import { MessageForm } from "./MessageForm";

export const Chat = ({
  conversationId,
}: ChatProps) => {
  const { messages, handleInputChange, handleSubmit, input, setInput } = useChat({
    api: "/api/chat-stream",
    body: { sessionId: conversationId },
  });

  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
        <ConversationMessages messages={messages} />
      </div>

      <MessageForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
        conversationId={conversationId}
      />
    </div>
  );
};