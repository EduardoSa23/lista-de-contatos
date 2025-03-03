import { Search, ChevronRight, ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { alterarTermo } from "../../store/reducers/filtro"
import FiltroCard from "../../components/FiltroCard"
import * as S from './styles'
import logo from "../../assets/logo.png"
import * as enums from '../../utils/enums/Contato'
import { Botao } from "../../styles"

type Props = {
  mostrarFiltros: boolean
}

const Sidebar = ({mostrarFiltros}: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const [aberta, setAberta] = useState(false)

  return (
    <>
      <S.MenuButton onClick={() => setAberta(!aberta)} className={aberta ? "aberta" : ""}>
        {aberta ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </S.MenuButton>
      
      <S.Aside className={aberta ? "aberta" : ""}>
        {mostrarFiltros ? (
          <>
          <S.Titulo>
            <img src={logo} alt="Logo" />
            <h1>CONNECTA</h1>
          </S.Titulo>
          <S.SearchContainer>
            <Search size={16} color="#888" />
            <input 
              type="text" 
              placeholder="Buscar" 
              value={termo} 
              onChange={evento => dispatch(alterarTermo(evento.target.value))} 
            />
          </S.SearchContainer>
          <S.Filtros>
            <FiltroCard criterio="todos" legenda="Todos" />
            <FiltroCard valor={enums.Categoria.FAVORITO} criterio="categoria" legenda="Favoritos" />
            <FiltroCard valor={enums.Categoria.TRABALHO} criterio="categoria" legenda="Trabalho" />
            <FiltroCard valor={enums.Categoria.AMIGO} criterio="categoria" legenda="Amigos" />
          </S.Filtros>
          <S.AdicionarContato to="/novo-contato">Adicionar Contato</S.AdicionarContato>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar a lista de contatos</Botao>
        )}
      </S.Aside>
    </>
  )
}

export default Sidebar
