
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { Chatbot } from "./Chatbot";

export function ChatbotTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating trigger button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 transform ${
            isOpen 
              ? 'bg-gray-600 hover:bg-gray-700 scale-90 rotate-90' 
              : 'bg-blue-600 hover:bg-blue-700 hover:scale-110 hover:shadow-xl'
          }`}
          size="icon"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform duration-200" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white transition-transform duration-200" />
          )}
        </Button>
      </div>
      
      <Chatbot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
