import { useState } from "react";
import {
  Bot,
  Send,
  Sparkles,
} from "lucide-react";

import portfolioData from "../../data/portfolioData";

function AI() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! I'm the AI assistant for this portfolio. Ask me about Arpit's skills, projects, education or contact details.",
    },
  ]);

  const [input, setInput] = useState("");

  const getAnswer = (question) => {
    const q = question.toLowerCase();

    if (
      q.includes("skill") ||
      q.includes("technology") ||
      q.includes("tech stack")
    ) {
      return `Arpit works mainly with JavaScript, React.js, Node.js, Express.js, MongoDB, Mongoose, REST APIs, JWT, RBAC, Git and GitHub.`;
    }

    if (
      q.includes("project") ||
      q.includes("projects")
    ) {
      return `Arpit has built Multi-Vendor E-Commerce, a marketplace with JWT/RBAC, Razorpay payments and AI-powered product discovery, plus TaskFlow, a Jira-style project management platform.`;
    }

    if (
      q.includes("education") ||
      q.includes("degree") ||
      q.includes("college")
    ) {
      return `${portfolioData.education.degree} from ${portfolioData.education.university} (${portfolioData.education.period}).`;
    }

    if (q.includes("razorpay") || q.includes("payment")) {
      return "The Multi-Vendor E-Commerce project includes Razorpay payment integration with success and failure handling.";
    }

    if (q.includes("ai") || q.includes("artificial intelligence")) {
      return "The Multi-Vendor E-Commerce project includes AI-powered product search and natural-language product recommendations.";
    }

    if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("hire")
    ) {
      return `You can contact Arpit at ${portfolioData.profile.email}. He is currently ${portfolioData.profile.availability.toLowerCase()}.`;
    }

    if (
      q.includes("github")
    ) {
      return `Arpit's GitHub profile is ${portfolioData.profile.github}`;
    }

    if (
      q.includes("linkedin")
    ) {
      return `Arpit's LinkedIn profile is ${portfolioData.profile.linkedin}`;
    }

    if (
      q.includes("location") ||
      q.includes("where")
    ) {
      return `Arpit is based in ${portfolioData.profile.location}.`;
    }

    return "I can answer about Arpit's skills, projects, Razorpay payments, AI features, education, GitHub, LinkedIn, location and contact details.";
  };

  const sendMessage = (question = input) => {
    const trimmed = question.trim();

    if (!trimmed) {
      return;
    }

    const answer = getAnswer(trimmed);

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: trimmed,
      },
      {
        role: "ai",
        text: answer,
      },
    ]);

    setInput("");
  };

  const suggestions = [
    "What are Arpit's skills?",
    "Tell me about his projects",
    "Where did he study?",
    "How can I contact him?",
    "Does the store have Razorpay?",
    "What AI features are included?",
  ];

  return (
    <div className="flex min-h-full flex-col bg-[#0f1116] text-white">

      {/* Header */}
      <div className="border-b border-white/10 px-5 py-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
            <Bot size={22} />
          </div>

          <div>
            <h2 className="font-semibold">
              AI
            </h2>

            <div className="flex items-center gap-1.5 text-xs text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Online
            </div>
          </div>

          <Sparkles
            size={16}
            className="ml-auto text-purple-400"
          />

        </div>

      </div>

      {/* Chat */}
      <div className="flex-1 space-y-4 overflow-y-auto p-5">

        {messages.map((message, index) => (

          <div
            key={index}
            className={`flex ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "border border-white/10 bg-white/[0.05] text-white/70"
              }`}
            >
              {message.text}
            </div>

          </div>

        ))}

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className="grid gap-2 pt-2 sm:grid-cols-2">

            {suggestions.map((suggestion) => (

              <button
                key={suggestion}
                type="button"
                onClick={() => sendMessage(suggestion)}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-left text-xs text-white/50 transition hover:bg-white/[0.08] hover:text-white"
              >
                {suggestion}
              </button>

            ))}

          </div>
        )}

      </div>

      {/* Input */}
      <div className="border-t border-white/10 p-4">

        <form
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] p-2"
        >

          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask something about Arpit..."
            className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-white/25"
          />

          <button
            type="submit"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 transition hover:bg-blue-500"
          >
            <Send size={16} />
          </button>

        </form>

      </div>

    </div>
  );
}

export default AI;