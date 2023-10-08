import React, { useState } from 'react';
import Inputs from './Inputs';
import Botao from './Botao';

const Formulario = ({salvarCadastroTeste}) => {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  
  const btnEnviar = (event) => {
    event.preventDefault();
    const cadastro = {nome, email};
    salvarCadastroTeste(cadastro);
    
  }
      
  return (
    <div>
      <form onSubmit={btnEnviar}>
        <Inputs
          placeholder='Digite o seu nome'
          type='text'
          label='Nome'
          onChange={(event) => setNome(event.target.value)}
          value={nome}
        />
        <Inputs
          placeholder='Digite o seu email'
          type='email'
          label='Email'
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <Botao
          type='submit'
          rotuloBtn='Enviar'
        />
      </form>

    </div>
  );
};

export default Formulario;
