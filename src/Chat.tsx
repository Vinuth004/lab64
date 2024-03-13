import React, { useRef, useState } from 'react';
import './chat.css';
import Navbar from './Nav';
import Footer from './Footer';
const ChatPage: React.FC = () => {
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState<{ text: string; time: string }[]>([]);
    const handleMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const messageInput = event.currentTarget.elements.namedItem('message') as HTMLInputElement;
        const message = messageInput.value.trim();
        if (message !== '') {
            addChatBubble(message);
            messageInput.value = ''; // Clear input field
        }
    };

    const addChatBubble = (message: string) => {
        const date = new Date();
        const formattedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const newMessage = { text: message, time: formattedTime };
        setMessages(prevMessages => [...prevMessages, newMessage]);

        // Scroll to bottom
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    return (
        <div>
            <Navbar/>
        
        <div className="container">
            <div className="chat-container" ref={chatContainerRef}>
                {messages.map((message, index) => (
                    <div className="chat-bubble" key={index}>
                        {message.text}
                        <div className="chat-bubble-date">{message.time}</div>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <form id="message-form" onSubmit={handleMessageSubmit}>
                    <input type="text" id="message" name="message" placeholder="Type your message here..." />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default ChatPage;
