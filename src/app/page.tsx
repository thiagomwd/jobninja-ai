import { Chat } from "@/components/Chat";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";

export const Home = async () => {
  const conversationCookie = (await cookies()).get("sessionId")?.value || randomUUID();

  return <Chat conversationId={conversationCookie} />;
}

export default Home;
