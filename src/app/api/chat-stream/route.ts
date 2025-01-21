import { geminiFlashModel } from "@/lib/google-ai";
import { NextRequest } from "next/server";
import { convertToCoreMessages, streamText } from "ai";
import { state } from "@/store/store";

export const POST = async (req: NextRequest) => {
  const { messages } = await req.json();

  const coreMessages = convertToCoreMessages(messages).filter(
    (message) => message.content.length > 0
  );

  const result = streamText({
    model: geminiFlashModel,
    system: `\n
        - you help users search and booking any type of services like Food & Beverage, Retail, Transportation, Contructions and etc !
        - keep your responses limited to a sentence.
        - DO NOT output lists.
        - base the job search in this data: ${JSON.stringify(state.jobs)}
        - after every tool call, pretend you're showing the result to the user and keep your response limited to a phrase.
        - today's date is ${new Date().toLocaleDateString()}.
        - ask follow up questions to nudge user into the optimal flow
        - ask for any details you don't know, like name of passenger, etc.'
        - C and D are aisle seats, A and F are window seats, B and E are middle seats
        - assume the most popular airports for the origin and destination
        - here's the optimal flow
          - be kind and helpful
          - present yourself and explaing what you do
          - ask for user email
          - search for services and goods
          - show available dates and prices
          - select date
            - confirm booking
            - send confirmation email
            - send confirmation email for professional from the service picked
        '
      `,
    messages: coreMessages,
  });

  return result.toDataStreamResponse({});
};
