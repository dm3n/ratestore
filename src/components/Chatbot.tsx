
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Send, MessageCircle, Loader2, ArrowUp, Maximize2, Minimize2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedQuestions = [
  "What's the lowest mortgage rate in Canada today?",
  "How much can I afford with a $100k salary?",
  "Should I refinance before my renewal?",
  "Show me first-time buyer programs",
  "What are the best savings account rates?",
  "How do I improve my credit score?",
];

export function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Welcome to RateStore Financial Services\n\nHere at RateStore, we're dedicated to finding the best financial solution for your needs. Our website offers tools and resources to help guide your financial journey.\n\nHow may I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputText;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      const { data, error } = await supabase.functions.invoke('chat-groq', {
        body: { message: textToSend }
      });

      if (error) {
        throw error;
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Card 
        className={`${
          isExpanded ? 'w-96 h-[700px]' : 'w-80 h-[550px]'
        } flex flex-col shadow-2xl border-0 transition-all duration-300 ease-out transform ${
          isOpen ? 'animate-in slide-in-from-bottom-8 fade-in-0' : 'animate-out slide-out-to-bottom-8 fade-out-0'
        }`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <CardTitle className="text-base font-semibold">RateStore Assistant</CardTitle>
              <p className="text-xs text-blue-100 mt-0.5">Financial Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white hover:bg-white/20 h-7 w-7"
            >
              {isExpanded ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="text-white hover:bg-white/20 h-7 w-7"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-3">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-sm transition-all duration-200 ${
                      message.isUser
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-gray-50 text-gray-900 border shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1.5 opacity-70 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Suggested Questions */}
              {showSuggestions && messages.length === 1 && (
                <div className="space-y-2">
                  <div className="flex justify-start">
                    <div className="bg-gray-50 rounded-xl px-3 py-2 border shadow-sm max-w-[90%]">
                      <p className="text-xs font-medium text-gray-700 mb-2">Suggested questions:</p>
                      <div className="grid gap-1.5">
                        {suggestedQuestions.map((question, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestedQuestion(question)}
                            className="text-left text-xs text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1.5 rounded-md border border-blue-200 hover:border-blue-300 transition-all duration-200"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-50 rounded-xl px-3 py-2 flex items-center gap-2 border shadow-sm">
                    <Loader2 className="w-3 h-3 animate-spin text-blue-600" />
                    <span className="text-xs text-gray-600">Thinking...</span>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>
          
          <div className="border-t p-3 bg-white">
            <div className="flex gap-2 items-end">
              <div className="flex-1 relative">
                <Input
                  placeholder="Type your message..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="pr-10 rounded-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm h-9"
                />
                <Button 
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim() || isLoading}
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300"
                >
                  {isLoading ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : (
                    <ArrowUp className="w-3 h-3" />
                  )}
                </Button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1.5 text-center">
              RateStore AI can make mistakes. Please verify important information.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
