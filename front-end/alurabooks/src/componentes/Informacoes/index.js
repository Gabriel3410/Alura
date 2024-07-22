import styled from 'styled-components'

const InformacoesContainer = styled.div`
    width: 90%;
    margin: 30px 40px 30px 40px; 
    background-color: #cf8700;
    color: whitesmoke;
    padding: 10px 20px;
    border-radius: 20px;
    text-align: center;
`

const InfromacaoTitle = styled.h1`
    font-size: 40px;
    font-weight: 500;
`

const InformacaoDescricao = styled.p`
    font-size: 30px;
    font-weight: 300;
`
const nomes = ['Guilherme'];

function Informacoes(){
    return(
        <InformacoesContainer>
            {nomes.map((nome)=>(
                <InfromacaoTitle> Bem-vindo {nome}</InfromacaoTitle>
            ))}
            <InformacaoDescricao>Aqui na alura book temos todos os tipos de livros que desejar</InformacaoDescricao>
        </InformacoesContainer>
    )
}

export default Informacoes