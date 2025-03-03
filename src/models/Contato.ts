import * as enums from '../utils/enums/Contato'

class Contato {
    nome: string
    descricao: string
    telefone: string
    email: string
    categoria: enums.Categoria
    id: number

    constructor(
        nome: string,
        descricao: string,
        telefone: string,
        email: string,
        categoria: enums.Categoria,
        id: number
    ) {
        this.nome = nome
        this.descricao = descricao
        this.telefone = telefone
        this.email = email
        this.categoria = categoria
        this.id = id
    }
}

export default Contato