import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 300px;
  list-style: none;
  border: 1px solid #262f34;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
`;

export const ListItemText = styled.b`
  color: #262f34;
`;

export const ListItemBtn = styled.button`
  background-color: #f1d3bc;
  color: #262f34;
  padding: 8px 12px;
  border: 2px solid #f34a4a;
  border-radius: 8px;
  cursor: pointer;

  button:hover {
    background-color: #f34a4a;
    border-color: #262f34;
    color: #f1d3bc;
  }
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
