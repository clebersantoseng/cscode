import React from 'react';

import { Container, Content } from './styles';
import development from '../../assets/img/cscode.png';

function Developement() {
  return (
    <>
    <Container>
      <Content>
        <h1>CsCode</h1>
        <span> Uma nova marca, um novo conceito em programação web ...</span>
        <img src={development} alt="Development" />
        <p>Aguarde ...</p>
      </Content>      
    </Container>
    </>
  );
}

export default Developement;