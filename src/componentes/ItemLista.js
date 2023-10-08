import Botao from "./Botao";


const itemLista = ({ cadastro, excluirCadastro}) => {
    return (

        <tr>
            <td>{cadastro.nome}</td>
            <td>{cadastro.email}</td>
            <td>{cadastro.id}</td>
            <td>
                <Botao
                    rotuloBtn='Editar'

                />
            </td>
            <td>
                <Botao
                    rotuloBtn='Excluir'
                    onClick={() => excluirCadastro(cadastro.id)}
                />
            </td>
        </tr>




    );
}
export default itemLista

//Explicação cadastro.id
    //quando o componente ItemLista é renderizado no contexto do mapeamento,
    //o objeto cadastro contém a propriedade id que foi atribuída a ele pelo 
    //servidor (backend) antes de ser passado como prop.