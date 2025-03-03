import styled from "styled-components"

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 1px solid ${(props) => (props.ativo ? '#bbb' : '#ddd')};
  border-radius: 8px;
  background-color: ${(props) => (props.ativo ? '#1e90ff' : '#fff')};
  color: ${(props) => (props.ativo ? '#e9ecef' : '#333')};
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color:${(props) => (props.ativo ? '#0386f2' : '#e9ecef')};
    border-color: #bbb;
  }
`;

export const Contador = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: block;
`;

export const Texto = styled.label`
  font-size: 16px;
`;
