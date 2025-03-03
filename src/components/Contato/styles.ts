import styled from "styled-components"

import variaveis from "../../styles/variaveis"
import * as enums from '../../utils/enums/Contato'

type TagProps = {
    categoria?: enums.Categoria
}

function retornaCorDeFundo(props: TagProps): string {
    if ('categoria' in props) {
        if (props.categoria === enums.Categoria.FAVORITO) return variaveis.dourado
        if (props.categoria === enums.Categoria.TRABALHO) return variaveis.preto
        if (props.categoria === enums.Categoria.AMIGO) return variaveis.cinza
    }
    return '#ccc'
}

export const Card = styled.div`
    background-color: #fcfcfc;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.25);
    padding: 16px;
    margin: 8px 8px 24px;
    border-radius: 16px;
    width: 250px;

    label {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }

    @media (max-width: 740px) {
        justify-content: center;
    }
`

export const Nome = styled.h3`
    font-size: 18px;
    font-weight: bold;
`

export const Telefone = styled.input`
    font-size: 16px;
    font-weight: bold;
    border: none;
`

export const Tag = styled.span<TagProps>`
    padding: 4px 8px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    background-color: ${(props) => retornaCorDeFundo(props)};
    border-radius: 8px;
    margin-right: 16px;
    display: inline-block;
`

export const Descricao = styled.textarea`
    color: #8b8b8b;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Roboto Mono', monospace;
    display: block;
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
    resize: none;
    border: none;
    background-color: transparent;
`

export const Email = styled.input`
    color: #8b8b8b;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Roboto Mono', monospace;
    display: block;
    width: 100%;
    padding-left: 6px;
    margin-bottom: 16px;
    margin-top: 16px;
    resize: none;
    border: 1px solid #8b8b8b;
    border-radius: 8px;
    background-color: transparent;
`

export const BarraAcoes = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
`