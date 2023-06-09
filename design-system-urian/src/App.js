import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import FollowButtonWithShadow from './Components/Button';
import BlogPostWithImage from "./Components/Card";
import { useState } from 'react';

// Você pode decidir se vai deixar o array em um arquivo separado e exportá-lo, ou então criá-lo direto no App.js
// Crie um estado e coloque seu array como valor inicial (não se preocupe em utilizar a função de atualização)
// Mapeie o estado, retornando o Card passando as props necessárias para personalização
// Edite o Card para receber as props e utilizá-las em seu interior

function App() {
  const itens = [{titulo:"Novo título", texto:"Novo texto",data:"Nova data"},{titulo:"Novo título 2", texto:"Novo texto 2",data:"Nova data 2"},{titulo:"Bananinha", texto:"Charmander fraquinho",data:"hoje e sempre"}]

  const [novosItens, setNovosItens] = useState(itens)

  const mapeado = novosItens.map((item)=>{
    return(
      <BlogPostWithImage
      titulo1={item.titulo}
      texto={item.texto}
      data={item.data}/>
    )
  })

  return (
    <ChakraProvider>
      {/* <BlogPostWithImage/> */}
      {mapeado}
      <FollowButtonWithShadow/>
    </ChakraProvider>
  );
}

export default App;
