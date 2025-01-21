import { type Message as TMessage } from "ai/react";
import { Hammer, PaintRoller } from "lucide-react";
import { Message } from "./Message";
import { useCallback, useEffect, useRef } from "react";

interface ConversationMessagesProps {
  messages: TMessage[];
}

export const ConversationMessages = ({
  messages,
}: ConversationMessagesProps) => {
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <div ref={chatRef} className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <div className="flex flex-row gap-2">
            <PaintRoller className="size-8 text-orange-500" />
            <Hammer className="size-8 text-orange-500" />
          </div>

          <h3 className="font-semibold text-xl text-white">
            Tell what kind of services you need...
          </h3>
          <p className="text-zinc-500 text-sm">
            Ask your first question to get started.
          </p>
        </div>
      )}
    </div>
  );
};
