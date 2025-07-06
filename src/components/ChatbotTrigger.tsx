
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Chatbot } from "./Chatbot";

export function ChatbotTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 z-40 animate-bounce"
        size="icon"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Button>
      
      <Chatbot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
