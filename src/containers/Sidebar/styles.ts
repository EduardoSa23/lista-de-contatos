import styled from "styled-components";
import { Link } from 'react-router-dom'


export const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  left: 10px;
  background: #1e90ff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  &.aberta {
    left: auto;
    right: 50px;
  }

  @media (min-width: 740px) {
    display: none;
  }
`

export const Aside = styled.aside`
  padding: 16px;
  background-color: #ececf5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  height: 100vh;
  border-right: 1px solid #ddd;
  position: fixed;
  left: -300px;
  top: 0;
  transition: left 0.3s ease-in-out;

  &.aberta {
    left: 0;
  }

  @media (min-width: 740px) {
    position: static;
    left: 0;
  }
`

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
  justify-content: center;

  img {
    width: 40px;
  }

  h1 {
    font-weight: 900 !important;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  gap: 8px;

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;
    color: #333;
  }
`

export const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`

export const AdicionarContato = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  width: 100%;
  text-align: center;
  background-color: #1e90ff;
  color: #fff;
  padding: 10px 16px;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background-color: #0386f2;
  }
`
