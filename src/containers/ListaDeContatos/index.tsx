import { useSelector } from "react-redux"

import Contato from "../../components/Contato"
import { MainContainer, Titulo } from "../../styles"

import { RootReducer } from "../../store"
import { Categoria } from "../../utils/enums/Contato"

const listaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtro)

  const filtrarContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = itens.filter((item) => item.nome.toLowerCase().search(termo.toLocaleLowerCase()) >= 0)

      if (criterio === 'categoria') {
        contatosFiltrados = contatosFiltrados.filter((item) => item.categoria === valor)
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao = termo !== undefined && termo.length > 0? `e "${termo}"` : ''

    if (criterio === 'todos') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "todos" ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "${`${valor}`}" ${complementacao}`
    }
    return mensagem
  }

  const contatos = filtrarContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((t) => (
          <li key={t.telefone}>
          <Contato 
            id={t.id}
            nome={t.nome} 
            descricao={t.descricao} 
            telefone={t.telefone} 
            email={t.email} 
            categoria={t.categoria}/>
        </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default listaDeContatos
