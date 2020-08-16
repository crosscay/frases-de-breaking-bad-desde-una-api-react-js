import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`

`;

const Frase = ({frase}) => (
    <ContenedorFrase>
        <h1>{frase.quote}</h1>
        <p>- {frase.author}</p>
    </ContenedorFrase>
);
 
export default Frase;