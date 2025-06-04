import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #f9f9f9;
`;

export const Messages = styled.ul`
  list-style: none;
  max-height: 300px;
  overflow-y: auto;
  padding: 0;
`;

export const MessageItem = styled.li`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 2px #ccc;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 1rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;
