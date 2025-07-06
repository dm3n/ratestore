
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { Chatbot } from "./Chatbot";

export function ChatbotTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating trigger button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'bg-gray-600 hover:bg-gray-700 scale-95' 
              : 'bg-blue-600 hover:bg-blue-700 animate-pulse hover:animate-none hover:scale-110'
          }`}
          size="icon"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </Button>
        
        {/* Notification badge for new users */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        )}
      </div>
      
      <Chatbot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
