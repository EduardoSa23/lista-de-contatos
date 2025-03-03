import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'
import Contato from '../../models/Contato'
import { Satellite } from 'lucide-react'

type ContatosState = {
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: [
        {
            nome: 'Eduardo Sá',
            descricao: 'Desenvolvedor Front-end',
            telefone: '(11) 99999-9999',
            email: 'eduardo@gmail.com',
            categoria: enums.Categoria.TRABALHO,
            id: 1
        },
        {
            nome: 'Denis Sá',
            descricao: 'Data Science',
            telefone: '(11) 99999-9777',
            email: 'denis@gmail.com',
            categoria: enums.Categoria.TRABALHO,
            id: 2
        },
        {
            nome: 'Carlos Sá',
            descricao: 'Desenvolvedor Back-end',
            telefone: '(11) 99999-9888',
            email: 'carlos@gmail.com',
            categoria: enums.Categoria.AMIGO,
            id: 3
        }
    ]
}

const contatosSlice = createSlice ({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter((contato) => contato.id !== action.payload)
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.itens.findIndex(c => c.id === action.payload.id)
            if (indexDoContato >= 0) {
                state.itens[indexDoContato] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const contatoJaExiste = state.itens.find(
              (contato) =>
                contato.telefone === action.payload.telefone
            )
      
            if (contatoJaExiste) {
              alert('Já existe um contato com esse telefone')
            } else {
                const ultimoContato = state.itens[state.itens.length - 1]

                const contatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }
                state.itens.push(contatoNovo)
            }
          }
    }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer