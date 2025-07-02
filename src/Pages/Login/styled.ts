import styled from "styled-components";
import { color } from "../../Components/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: ${color.background};
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza verticalmente */
  align-items: center;     /* Centraliza horizontalmente */
  border: none; /* você pode manter ou remover conforme desejar */

  h1 {
    font-size: 1.5rem;
    color: ${color.text};
  }

  p {
    color: ${color.textSecondary};
    margin-bottom: 1rem;
  }
`;