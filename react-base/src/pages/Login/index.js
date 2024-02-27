import React from 'react';
import {Title, Paragrafo} from './styled';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import axios from '../../services/axios';


export default function Login() {
  // posso fazer requisicoes aqui!!
  React.useEffect(() => {
    async function getData() {
      try {
      const response = await axios.get('/alunos');
      console.log(response);
      }
      catch(e) {
        console.log(e);
      }
    }
    getData();
  },
  []); // semelhante ComponentDidMount

  toast.success('SUcesso', {
    toastId: 'successId',
  });
  toast.error('Insucesso',{
    toastId: 'unsuccessId',
  });


  return (
    <React.Fragment>
    <Container>
    <Title isRed={false}>Login
      <small>OIIII</small>
    </Title>
    <Paragrafo>Lorem5</Paragrafo>
    <a href=''>OIOOIOIIOIOOIOIO</a>
    <button>OI</button>
    </Container>



    </React.Fragment>

  )
}
