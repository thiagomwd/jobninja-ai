import { geminiFlashModel } from "@/lib/google-ai";
import { NextRequest } from "next/server";
import { convertToCoreMessages, streamText } from "ai";
import { state } from "@/store/store"; 
import { POST } from "@/app/api/chat-stream/route";

jest.mock("ai"); 
jest.mock("@/lib/google-ai");

describe("POST function", () => {
  it("should filter empty messages and call streamText with correct arguments", async () => {
    const mockStreamText = streamText as jest.MockedFunction<typeof streamText>;

    const req: NextRequest = {
      json: jest.fn().mockResolvedValue({
        messages: [
          { role: "user", content: " " }, // Empty message
          { role: "user", content: "test message" },
        ],
      }),
    } as unknown as NextRequest; 

    const expectedCoreMessages = [
      { role: "user", content: "test message" },
    ];

    await POST(req);

    expect(convertToCoreMessages).toHaveBeenCalledTimes(1);
    expect(mockStreamText).toHaveBeenCalledWith({
      model: geminiFlashModel,
      system: expect.any(String), // Assert that system message is provided
      messages: expectedCoreMessages,
    });
  });
});