import FormularioCadastro from "../../containers/Formulario"
import Sidebar from "../../containers/Sidebar"

const Cadastro = () => (
    <>
      <Sidebar mostrarFiltros={false}/>
      <FormularioCadastro />
    </>
  )

export default Cadastro