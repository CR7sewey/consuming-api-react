import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';
//import axios from '../../services/axios';
import { Form } from './styled';
import {isEmail } from 'validator';
import { get} from 'lodash';

import history from '../../services/history';
// registo
export default function User() {
  // posso fazer requisicoes aqui!!

  const [nome, setNome] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);



  // semelhante ComponentDidMount*/

  /*toast.success('SUcesso', {
    toastId: 'successId',
  });
  toast.error('Insucesso',{
    toastId: 'unsuccessId',
  });*/

  async function handleSubmit(e) {
    e.preventDefault();
    // valido aqui para economixar o backend
    let formErrors = false;
    if (nome <3 || nome >255) {
      formErrors = true;
      toast.error('Your name must have a length btw 3 and 255!',{
        toastId: 'nomeID',
      });    }

    if (password <6 || password >50) {
        formErrors = true;
        toast.error('Your password must have a length btw 6 and 50!',{
          toastId: 'passID',
        });    }

    if (!email) {
      formErrors = true;
          toast.error('Put an email!.',{
            toastId: 'emailID',
          });

    }
    if (email && !isEmail(email)) {
          formErrors = true;
          toast.error('Wrong email format. ex: example@gmail.com.',{
            toastId: 'emailID',
          });    }

    if (formErrors){
      return;
    }

    if (!formErrors) {
          try {            //console.log(response);
            const datFake = { // pq esta um erro qq na requesicao à db pelo axios
              email,
              nome,
              password,
            };
            //console.log(datFake)
            setNome(datFake.nome);
            setEmail(datFake.email);
            setPassword(datFake.password);
            console.log(datFake)
            //await axios.post('/users',datFake);
            toast.success('REgister done!');
            history.push('/login'); // redireciona para login
          }

          catch(e) {
            //const status = get(e, 'response.status', 0);
            const errors = get(e, 'response.data.errors', []); // do backend
            errors.map((erro) => {
              toast.error(erro); // erros do backend
            })
          }
        }



    }




  return (
    <React.Fragment>
    <Container>
      <h1>Crie a sua conta</h1>

      <Form onSubmit={handleSubmit}>

          <label htmlFor='nome'>Nome:
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder='Nome'/></label>

          <label htmlFor='email'>Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'/></label>

          <label htmlFor='password'>Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha'/></label>

          <button type='submit'>Criar conta</button>

      </Form>
    </Container>
    </React.Fragment>

  )
}
