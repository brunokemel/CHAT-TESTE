import React, { useEffect, useState, useRef } from "react";
import io, { Socket } from "socket.io-client";
import { Container, Messages, MessageItem, Form, Input, Button} from  "./Components/styled"

const socket: Socket = io("https://server-production-9856.up.railway.app");



type Message = {
  id: string;
  text: string;
};

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLUListElement>(null);

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