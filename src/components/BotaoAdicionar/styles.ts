import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 48px;
  width: 48px;
  background-color: #1e90ff;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 10px;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;

  @media (min-width: 740px) {
    display: none;
  }
`
