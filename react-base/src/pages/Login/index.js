import React from 'react';
import {Title, Paragrafo} from './styled';
import { Container } from '../../styles/GlobalStyles';
import { toast } from 'react-toastify';


export default function Login() {
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
