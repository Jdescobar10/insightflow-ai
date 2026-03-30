"use client";

import { useState } from "react";
import { useAIChat } from "../hooks/useAIChat";

export const ChatBox = () => {
  const { messages, sendMessage, loading } = useAIChat();
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;
    await sendMessage(input);
    setInput("");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 mt-10">
      
      <h3 className="text-lg font-semibold mb-4">
        AI Assistant
      </h3>

      {/* MESSAGES */}
      <div className="h-64 overflow-y-auto space-y-3 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[80%] ${
              msg.role === "user"
                ? "bg-indigo-500 text-white ml-auto"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg px-4 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button
          onClick={handleSend}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>

      {loading && (
        <p className="text-sm text-gray-400 mt-2">AI thinking...</p>
      )}
    </div>
  );
};