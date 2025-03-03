import Sidebar from "../../containers/Sidebar"
import ListaDeContatos from "../../containers/ListaDeContatos"
import BotaoAdicionar from "../../components/BotaoAdicionar"

const Home = () => (
    <>
        <Sidebar mostrarFiltros/>
        <ListaDeContatos />
        <BotaoAdicionar />
    </>
)

export default Home