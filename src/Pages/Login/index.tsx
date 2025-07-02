import { 
  Container,
 } from "./styled";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

    const handleLogin = () => {
    // aqui você pode colocar a lógica de validação/autenticação
    navigate('/chat');
  };

  
  return (
      <>  
    <Container>
      <h1>Bem-vindo ao Chat</h1>
      <p>Por favor, entre para continuar</p>
      <button onClick={handleLogin}>Entrar no Chat</button>
    </Container>
    </>
  );
};

export default Login;