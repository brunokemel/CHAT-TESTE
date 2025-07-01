import styled from "styled-components";
import { color } from "../../Components/colors";

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  border: ${color.border};
  border-radius: 6px;
  background: ${color.background};
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
  background: ${color.backgroundBase};
  border-radius: 4px;
  box-shadow: ${color.boxShadow};
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
