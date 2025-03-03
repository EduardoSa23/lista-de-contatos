
import styled from "styled-components"

export const Container = styled.div`
  padding: 0 40px;
  height: 100vh;
  width:30vw;

  @media (max-width: 740px) {
      width: 80%;
      display: block;
    }
`

export const Formulario = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 740px) {
      display: block;
      width: 80vw;

      input {
        width: 80vw;
        margin-bottom: 8px;
      }

      select {
        width: 80vw;
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

      @media (max-width: 740px) {
        width: 80vw;
      }
`

export const  Input = styled.input`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  gap: 8px;
  width: 12vw;

  &:focus {
    border: 1px solid #1e90ff !important;
    background-color: #ececf5;
  }
`

export const Select = styled.select`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #fff;
  outline: none;
  width: 12vw;
  cursor: pointer;
  transition: border 0.3s ease, background-color 0.3s ease;

  &:focus {
    border: 1px solid #1e90ff;
    background-color: #ececf5;
  }

  &::placeholder {
    color: #aaa;
  }
`

export const Cadastrar = styled.button`
  display: inline-block;
  margin-top: 16px;
  width: 100%;
  text-align: center;
  background-color: #1e90ff;
  color: #fff;
  border: none;
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