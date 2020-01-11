import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
  MenuTextContainer,
  MenuTextContainerRow,
  MenuText,
} from './styles';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({translateY, screenHeight}) {
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 250],
          outputRange: [0, 1],
        }),
        maxHeight: screenHeight * 0.8,
      }}>
      <Code>
        <QRCode
          backgroundColor="#FFF"
          value="asdasasdasdasddasd"
          logo={{uri: base64Logo}}
          logoSize={80}
          color="#8B10AE"
        />
      </Code>
      <MenuTextContainer>
        <MenuTextContainerRow>
          <MenuText>Banco </MenuText>
          <MenuText style={{fontWeight:'bold'}}>260 - Nu Pagamentos S.A.</MenuText>
        </MenuTextContainerRow>
        <MenuTextContainerRow>
          <MenuText>Agência </MenuText>
          <MenuText style={{fontWeight:'bold'}}>0001</MenuText>
        </MenuTextContainerRow>
        <MenuTextContainerRow>
          <MenuText>Conta </MenuText>
          <MenuText style={{fontWeight:'bold'}}>6666666-6</MenuText>
        </MenuTextContainerRow>
      </MenuTextContainer>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
