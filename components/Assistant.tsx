import React, { useState, useRef, useEffect } from 'react';
import { generateArtistAdvice } from '../services/geminiService';
import { Sparkles, Send, Bot, AlertCircle, X } from 'lucide-react';
import { ChatMessage } from '../types';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Ey! ⚡ Soy tu Heavy Assistant. ¿En qué te ayudo? Estrategias, pitch para playlists o dudas legales.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await generateArtistAdvice(input);
      const botMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, tuve un problema de conexión. Inténtalo de nuevo.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
        {/* Floating Toggle Button */}
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-black ${isOpen ? 'bg-red-500 rotate-90' : 'bg-black'}`}
        >
            {isOpen ? (
                <X className="text-white w-8 h-8" />
            ) : (
                <div className="relative">
                    <Sparkles className="text-yellow-400 w-8 h-8" fill="currentColor" />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                </div>
            )}
        </button>

        {/* Chat Window */}
        <div className={`fixed bottom-24 right-6 z-40 w-[90vw] sm:w-[400px] bg-white rounded-3xl shadow-2xl shadow-purple-900/20 border-2 border-black transition-all duration-500 origin-bottom-right transform ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-20 pointer-events-none'}`}>
          
          {/* Header */}
          <div className="bg-black p-4 rounded-t-[22px] flex items-center justify-between border-b border-gray-800">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Bot size={18} className="text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-white leading-none">Heavy AI</h3>
                    <div className="flex items-center gap-1 mt-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Online</span>
                    </div>
                </div>
             </div>
             <button onClick={() => setMessages([])} className="text-gray-500 hover:text-white text-xs underline">
                Limpiar
             </button>
          </div>

          {/* Chat Area */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[85%] gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Bubble */}
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-purple-600 text-white rounded-br-none' 
                      : msg.isError 
                        ? 'bg-red-50 text-red-600 border border-red-100 rounded-bl-none'
                        : 'bg-gray-100 text-gray-900 border border-gray-200 rounded-bl-none'
                  }`}>
                    {msg.isError && <AlertCircle size={14} className="inline mr-1 mb-1" />}
                    {msg.text.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start w-full">
                <div className="bg-gray-100 rounded-2xl rounded-bl-none p-3 flex items-center gap-2">
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t-2 border-gray-100 rounded-b-[22px]">
            <div className="relative flex items-center gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Pregunta algo..."
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-sm font-medium"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 bg-black text-white p-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
    </>
  );
};