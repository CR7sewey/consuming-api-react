import React from 'react';
import { Container } from '../../styles/GlobalStyles';
//import { toast } from 'react-toastify';
//import axios from '../../services/axios';


export default function Aluno() {
  // posso fazer requisicoes aqui!!
 /* React.useEffect(() => {
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
  []); // semelhante ComponentDidMount*/

  /*toast.success('SUcesso', {
    toastId: 'successId',
  });
  toast.error('Insucesso',{
    toastId: 'unsuccessId',
  });*/


  return (
    <React.Fragment>
    <Container>
      <h1>LOGIN</h1>
    </Container>
    </React.Fragment>

  )
}
