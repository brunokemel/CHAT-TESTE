export type Colors = {
  background: string;
  backgroundBase: string;
  boxShadow: string;
  border: string;
  primary: string;
  secondary: string;
  userMessage: string;
  otherMessage: string;
  text: string;
  textSecondary: string;
  button: string;
  buttonText: string;
}

export const color: Colors = {
  background: "#f2f3f5",         // Fundo geral claro
  backgroundBase: "#ffffff",     // Fundo de caixas e mensagens
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)", // Sombra suave
  border: "1px solid #e0e0e0",   // Bordas suaves
  primary: "#006eff",            // Azul primário (destaques e botões)
  secondary: "#4b5563",          // Cinza escuro (textos e ícones)
  userMessage: "#d1e7ff",        // Fundo da mensagem enviada
  otherMessage: "#e4e4e7",       // Fundo da mensagem recebida
  text: "#111827",               // Texto principal
  textSecondary: "#6b7280",      // Texto secundário
  button: "#006eff",             // Fundo do botão
  buttonText: "#ffffff"          // Texto do botão
}