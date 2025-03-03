import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  transition: margin-left 0.3s ease-in-out;

  @media (min-width: 740px) {
    grid-template-columns: 300px auto;
  }

  &.com-sidebar {
    margin-left: 300px;
  }
`

export const MainContainer = styled.main`
    height: 99vh;
    overflow-y: scroll;
    padding: 0 40px;

    ul {
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 740px) {
            justify-content: center;
        }
    }
`

export const Titulo = styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
    color: #4A4A4A;
    background: #ececf5;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Botao = styled.button`
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: #1e90ff;
    border-radius: 8px;
    margin-right: 8px;
`
export default EstiloGlobal
