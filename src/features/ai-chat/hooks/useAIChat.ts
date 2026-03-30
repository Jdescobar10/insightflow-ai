import { useState } from "react";
import { sendMessageToAI } from "../services/ai.service";

type Message = {
  role: "user" | "ai";
  content: string;
};

export const useAIChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    const userMessage: Message = { role: "user", content: text };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const response = await sendMessageToAI(text);

    const aiMessage: Message = { role: "ai", content: response };

    setMessages((prev) => [...prev, aiMessage]);
    setLoading(false);
  };

  return { messages, sendMessage, loading };
};