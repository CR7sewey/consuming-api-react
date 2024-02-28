import React, {useState} from 'react';
import { Container } from '../../styles/GlobalStyles';
//import { toast } from 'react-toastify';
//import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture} from './styled';
import { get} from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Alunos() {
  // posso fazer requisicoes aqui!!
  // tenho de usar estado!!! posso usar num componete de classe ou um rook
  const [alunos, setAlunos] = useState([]);

  React.useEffect(() => {
    async function getData() {
      try {
        //const response = await axios.get('/alunos');
        //console.log(response);
        const datFake = [{ // pq esta um erro qq na requesicao à db pelo axios
          id:	2,
          nome:	"Miguel2",
          sobrenome:	"Miguel2",
          email:	"miguel2@gmial.com",
          idade:	24,
          peso:	85,
          altura:	1.84,
        }, {
          id:	4,
          nome:	"Mike",
          sobrenome:	"Miguel4",
          email:	"miguel4@gmial.com",
          idade:	24,
          peso:	85,
          altura:	1.84
        }];
        console.log(datFake)
        setAlunos(datFake);
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
      <h1>Alunos</h1>
      <AlunoContainer>{
        alunos.map(aluno => (
          <ProfilePicture key={(String(aluno.id))}>
            {get(aluno, 'Fotos[0].url',false) ?
            (<img src={aluno.Fotos[0].url} alt="" />)
          : (
            <FaUserCircle size={36}/>
          )}

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={'/aluno/${aluno.id}'}><FaEdit size={16}/></Link>
            <Link to={'/'}><FaWindowClose size={16} /></Link>


          </ProfilePicture>
          ))
      }</AlunoContainer>
    </Container>
    </React.Fragment>

  )
}
