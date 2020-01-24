import React from 'react';

import styled from "styled-components";

export const ContainerDiv = styled.div`
background-color: #88CCFF;
padding: 2%;
display: flex;

`;

export const GridDiv = styled.div`
  background-color: #88CCFF;
  display: grid;
  grid-gap: 2%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 0 2%;
  padding: 2%;
`;

export const Button = styled.button`
  margin: 2%;
  border: none;
  border-radius: 5px;
  padding: 2%;
  background: red;
  &:hover {
    background-color: #88CCFF;
    cursor: pointer;
    color: white;
  }
  
`;