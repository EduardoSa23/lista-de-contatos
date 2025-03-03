import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as enums from '../../utils/enums/Contato';
import * as S from './styles'
import { cadastrar } from '../../store/reducers/contatos';
import Contato from '../../models/Contato';

const FormularioCadastro = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [categoria, setCategoria] = useState(enums.Categoria.TRABALHO);

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    if (!nome || !telefone || !email) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    dispatch(cadastrar({
      nome,
      descricao,
      telefone,
      email,
      categoria,
    }));

    setNome('');
    setDescricao('');
    setTelefone('');
    setEmail('');
    setCategoria(enums.Categoria.TRABALHO);
  }

  return (
    <S.Container>
      <S.Titulo>Novo contato</S.Titulo>
      <S.Formulario onSubmit={cadastrarContato}>
        <S.Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <S.Input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <S.Input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <S.Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <S.Select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value as enums.Categoria)}
        >
          <option value={enums.Categoria.TRABALHO}>Trabalho</option>
          <option value={enums.Categoria.AMIGO}>Amigo</option>
          <option value={enums.Categoria.FAVORITO}>Favorito</option>
        </S.Select>
        <S.Cadastrar type="submit">Cadastrar</S.Cadastrar>
      </S.Formulario>
    </S.Container>
  );
};

export default FormularioCadastro;
