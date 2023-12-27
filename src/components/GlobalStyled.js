import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1d3bc;
  padding: 20px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

b {
margin-right: 10px;
}

button {
  cursor: pointer;
  display: inline-block;
  padding: 12px 20px;
  font-size: 18px;
  color: #262f34;
  background-color: #f1d3bc;
  border: 2px solid #f34a4a;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f34a4a;
    border-color: #262f34;
    color: #f1d3bc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(38, 47, 52, 0.7);
  }
}`;
