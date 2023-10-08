import React, { useState, useEffect } from 'react';
import Tabela from './componentes/Tabela'
import ItemLista from './componentes/ItemLista'

import Formulario from './componentes/Formulario';
import axiosInstance from './componentes/helper/axios-instance';


function App() {

  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    axiosInstance.get('/cadastros')
      .then(response => setCadastros(response.data))
    console.log(cadastros);
  }, [])

  const salvarCadastro = (cadastro) => {
    axiosInstance.post('/cadastros', cadastro) //essa linha adiciona o novo registro na api
      //daqui para baixo, adiciona ao front-end  
      .then(response => {
        setCadastros([...cadastros, response.data]);
        console.log(response);
      })
      .catch(error => {
        console.error('Erro ao salvar o cadastro:', error);
      });
  }

  const excluirCadastro = (id) => {
    console.log(`registro ${id} deletado`);
    axiosInstance.delete(`/cadastros/${id}`)  //essa linha manda o registro escolhido para ser excluido na api
      .then((response) => response.data)
      .then(setCadastros(cadastros.filter((cadastro) => cadastro.id !== id))); //essa linha apaga o registro excluido no front-end

  }



  return (
    <div className='App'>
      <Formulario
        salvarCadastroTeste={salvarCadastro}
      />
      <Tabela>
        {cadastros.map((cadastro, index) => (
          <ItemLista
            cadastro={cadastro}
            key={index}         //Cada componente itemLista terá uma key com o valor da index
            excluirCadastro={excluirCadastro}
          />
        ))}

      </Tabela>
    </div>
  );
}

export default App;
