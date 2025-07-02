import React, { useEffect, useState, useRef } from "react";
import io, { Socket } from "socket.io-client";

import { Container, Messages, MessageItem, Form, Input, Button} from  "./styled"


const socket: Socket = io("https://server-s8zh.onrender.com");

  type Message = {
  id: string;
  text: string;
};


 const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLUListElement>(null);

  // useEffect(() => {
  //     // BEM-VINDO AO CHAT
  //   alert("Bem-vindo ao chat!");
  //     // Aviso para o usuário sobre a perda de mensagens
  //   alert("O servidor não armazenará as mensagens, elas serão perdidas ao recarregar a página.");
    
  // }, []);


  useEffect(() => {
    socket.on("receive_message", (message: string) => {
      setMessages((prev) => [
        ...prev,
        { id: Math.random().toString(36), text: message },
      ]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    // Scroll automático para a última mensagem
    messagesEndRef.current?.scrollTo(0, messagesEndRef.current.scrollHeight);
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    socket.emit("send_message", input);
    setInput("");
  };

  return (
    <Container>
      <h1>Chat Teste</h1>
      <Messages ref={messagesEndRef}>
        {messages.map((m) => (
          <MessageItem key={m.id}>{m.text}</MessageItem>
        ))}
      </Messages>
      <Form onSubmit={handleSubmit}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem"
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

export default Chat;