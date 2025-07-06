
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { X, Send, MessageCircle, Loader2, Mic, ArrowUp, Sparkles } from "lucide-react";
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
  "What's the best mortgage rate available?",
  "How do I improve my credit score?", 
  "Which savings account offers the highest interest?",
  "What insurance do I need as a first-time homeowner?"
];

export function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
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

    setShowWelcome(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed bottom-24 right-6 z-[9998] transition-all duration-500 ease-out ${
        isOpen 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
      }`}
    >
      <Card className="w-[380px] h-[650px] flex flex-col shadow-2xl border-0 bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden">
        {/* Header */}
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">RateStore Assistant</h3>
              <p className="text-blue-100 text-xs">Your Financial Guide</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="text-white hover:bg-white/20 h-9 w-9 rounded-full transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          {/* Welcome Screen */}
          {showWelcome && messages.length === 0 && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Welcome to RateStore</h2>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">Your AI-powered financial assistant is here to help you make smarter financial decisions.</p>
              
              <div className="w-full space-y-4">
                <p className="text-gray-800 font-semibold text-sm">Popular Questions</p>
                
                <div className="space-y-3">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question)}
                      className="w-full text-left p-4 text-blue-700 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-300 text-sm font-medium hover:shadow-md transform hover:scale-[1.02] border border-blue-200/50"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Chat Messages */}
          {(messages.length > 0 || !showWelcome) && (
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        message.isUser
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-900 shadow-sm border border-gray-200'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-gray-100 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm border border-gray-200">
                      <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                      <span className="text-sm text-gray-600">Thinking...</span>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </ScrollArea>
          )}
          
          {/* Input Area */}
          <div className="p-4 border-t bg-gray-50/50 backdrop-blur-sm">
            <div className="flex gap-3 items-center">
              <div className="flex-1 relative">
                <Input
                  placeholder="Ask about rates, loans, insurance..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="pr-24 rounded-full border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 text-sm h-12 bg-white shadow-sm"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <Button 
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    disabled={isLoading}
                  >
                    <Mic className="w-4 h-4 text-gray-500" />
                  </Button>
                  <Button 
                    onClick={() => handleSendMessage()}
                    disabled={!inputText.trim() || isLoading}
                    size="icon"
                    className="h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                    ) : (
                      <ArrowUp className="w-4 h-4 text-white" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Powered by RateStore AI • Secure & Private
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
