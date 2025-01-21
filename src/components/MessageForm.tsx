"use client";

import { Button, Textarea } from "@heroui/react";
import { Send } from "lucide-react";
import { type useChat } from "ai/react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface MessageFormProps {
  conversationId?: string;
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

export const MessageForm = ({
  handleInputChange,
  handleSubmit,
  input,
  setInput,
}: MessageFormProps) => {

  return (
    <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
      <div className="max-2 flex flex-row gap-3">
        <div className="relative flex h-full flex-1 items-stretch">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <form onSubmit={handleSubmit} className="relative">
              <Textarea
                onChange={handleInputChange}
                value={input}
                minRows={4}
                autoFocus
                placeholder="Enter your needs..."
                className="resize-none bg-zinc-800 hover:bg-zinc-900 rounded-xl text-base"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                    setInput("");
                  }
                }}
              />

              <Button
                size="sm"
                type="submit"
                className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
              >
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
