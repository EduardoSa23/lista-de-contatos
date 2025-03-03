import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao } from '../../styles'

type Props = ContatoClass

const Contato = ({ descricao: descricaoOriginal, telefone: telefoneOriginal, categoria, nome, email: emailOriginal, id } : Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)

    const [contatoSalvo, setContatoSalvo] = useState({
        descricao: descricaoOriginal,
        telefone: telefoneOriginal,
        email: emailOriginal
    })

    const [descricao, setDescricao] = useState(contatoSalvo.descricao)
    const [telefone, setTelefone] = useState(contatoSalvo.telefone)
    const [email, setEmail] = useState(contatoSalvo.email)

    useEffect(() => {
        setDescricao(contatoSalvo.descricao)
        setTelefone(contatoSalvo.telefone)
        setEmail(contatoSalvo.email)
    }, [contatoSalvo])

    function cancelarEdicao() {
        setEstaEditando(false)
        setDescricao(contatoSalvo.descricao)
        setEmail(contatoSalvo.email)
        setTelefone(contatoSalvo.telefone)
    }

    function salvarEdicao() {
        const novoContato = {
            id,
            descricao,
            telefone,
            email,
            categoria,
            nome
        }

        dispatch(editar(novoContato))
        setContatoSalvo(novoContato)
        setEstaEditando(false)
    }

    return (
        <S.Card>
            <S.Nome>{nome}</S.Nome>
            <S.Descricao 
                disabled={!estaEditando} 
                value={descricao} 
                onChange={(e) => setDescricao(e.target.value)}  
            />
            <S.Telefone 
                type='text' 
                value={telefone} 
                onChange={(e) => setTelefone(e.target.value)}
            />
            <S.Email 
                disabled={!estaEditando}
                type='text'
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <S.Tag categoria={categoria}>{categoria}</S.Tag>
            <S.BarraAcoes>
                {estaEditando ? (
                    <>
                        <Botao onClick={salvarEdicao}>
                            <i className="fas fa-save"></i>
                        </Botao>
                        <Botao onClick={cancelarEdicao}>
                            <i className="fas fa-cancel"></i>
                        </Botao>
                    </>
                ) : (
                    <>
                        <Botao onClick={() => window.location.href = `tel:${telefone.replace(/\D/g, '')}`}><i className="fas fa-phone"></i></Botao>
                        <div>
                            <Botao onClick={() => setEstaEditando(true)}>
                                <i className="fas fa-edit"></i>
                            </Botao>
                            <Botao onClick={() => dispatch(remover(id))}>
                                <i className="fas fa-trash"></i>
                            </Botao>
                        </div>
                    </>
                )}
            </S.BarraAcoes>
        </S.Card>
    )
}

export default Contato
