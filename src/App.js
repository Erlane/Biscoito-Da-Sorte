import React, { Component } from 'react';
import styled from 'styled-components';
import BicoitoDaSorte from './assets/biscoito.jpg';
import Whats from './assets/whats.png';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  @media(max-width: 425px){
    background-color: #FFFFFF;
  }
`;

const SubContainer = styled.div`
  width: 40%;
  background-color: #FFF;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 2rem;

  @media(max-width: 768px){
    width: 70%;
  }
  @media(max-width: 425px){
    width: 100%;
    padding: 0;
  }
`;

const Title = styled.h1`
  color: red;
  font-size: 2.2rem;
  font-family: 'Dancing Script', cursive;
  margin: 0 0 2rem;
`;

const SubContainerPhrases = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 25vw;

  @media(max-width: 425px){
    width: 80vw;
  }
`;

const Paragraph = styled.p`
  width: 19vw;
  height: 8.3vh;
  background: #FFFFFF;
  color: #B59619;
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  top: 55px;
  left: 168px;
  transform: rotate(-10deg);
  position: absolute;
  z-index: 1;

  @media(max-width: 768px){
    width: 33vw;
    top: 24px;
    left: 100px;
  }

  @media(max-width: 648px){
    top: 18px;
    left: 85px;
  }

  @media (max-width: 425px){
    width: 50vw;
    height: 9.3vh;
    top: 70px;
    left: 153px;
  }

  @media (max-width: 375px){
    width: 50vw;
    height: 11vh;
    top: 55px;
    left: 153px;
  }
`;

const Button = styled.button`
  width: 70%;
  background-color: red;
  border: none;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 1rem 1rem;
  margin-top: 2rem;
  outline: none;
  cursor: pointer;

  img {
    width: 20px;
    margin-right: 3%;
  }

  :hover {
    font-size: 1rem;
  }

  @media(max-width: 425px){
    width: 80%;
  }
`;

class App extends Component {
  state = {
    phrases: [
    'Todas as coisas são difíceis antes de se tornarem fáceis.',
    'Deixe de lado as preocupações e seja feliz.',
    'Nós somos o que pensamos.',
    'Nada é por acaso… Acredite em seus sonhos e nos seus potenciais… Na vida tudo se supera.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Você sempre será a sua melhor companhia!',
    'São os nossos amigos que nos ensinam as mais valiosas lições.',
    'Surpreender e ser surpreendido é o segredo do amor.',
    'Quem olha para fora sonha; quem olha para dentro acorda.',
    'O amor está mais próximo do que você imagina.',
    'Você é do tamanho do seu sonho.',
    ],
    text: '',
  }

  handlePhrase = () => {
    let mensage = this.state.text;

    let randon = Math.floor(Math.random() * this.state.phrases.length);

    mensage = this.state.phrases[randon];

    this.setState({
     text: mensage,
    });
  }

  handleShare = () => {
      const sharePhrase = this.state.text;
      window.open(`https://web.whatsapp.com/send?text=${sharePhrase}`)
    }

render() {
  return (
    <Container>
      <SubContainer>
        <Title>Biscoito da sorte ! =) </Title>
        <SubContainerPhrases>
          <Image src={BicoitoDaSorte} alt='biscoito'/>
          <Paragraph>{this.state.text}</Paragraph>
        </SubContainerPhrases>
        <Button onClick={this.handlePhrase}>Sortear frase</Button>
        <Button onClick={this.handleShare}><img src={Whats} alt='Icone do WhatsApp'/>Compartilhar</Button>
      </SubContainer>
    </Container>
    );
  }
}
export default App;
