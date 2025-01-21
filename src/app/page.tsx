import { Chat } from "@/components/Chat";
import { randomUUID } from "crypto";

export default async function Home() {
  const conversationId = randomUUID();

  return <Chat conversationId={conversationId} />;
};
