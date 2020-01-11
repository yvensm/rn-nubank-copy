import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Animated, Dimensions, View, StyleSheet, Alert} from 'react-native';
import {
  PanGestureHandler,
  State,
  RectButton,
  BaseButton,
} from 'react-native-gesture-handler';

import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  HeaderTitle,
  Description,
  Annotation,
} from './style';

export default function Main() {
  //Muda cor dos botões de navegação

  changeNavigationBarColor('#8B10AE');

  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  

  const translateY = new Animated.Value(0);
  let offset = 0;

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;
      translateY.setOffset(offset);
      translateY.setValue(0);

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  const moneyVisibility = new Animated.Value(0);
  let moneyDisplay = false;


  function moneyDisplayHandler(){
    moneyDisplay= !moneyDisplay;

    Animated.timing(moneyVisibility,{
      toValue: moneyDisplay ? 150 : 0,
      duration: 300,
    }).start();

  }

  const styleSheet = {
    moneyDisplay:{
      color: moneyVisibility.interpolate({
        inputRange:[0,150],
        outputRange:['rgba(0,0,0,0)','rgba(0,0,0,1)'],
      }),
      backgroundColor: moneyVisibility.interpolate({
        inputRange:[0,150],
        outputRange:['rgba(20,20,20,0.1)','rgba(20,20,20,0)'],
      }),
      }
    }
  return (
    <Container>
      <Header />

      <Menu translateY={translateY} screenHeight={screenHeight} />
      <Content>
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [
                      -20,
                      0,
                      screenHeight / 2 + (screenHeight / 2) * 0.5,
                    ],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <HeaderTitle>NuConta</HeaderTitle>
              <BaseButton
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={moneyDisplayHandler}>
                <Icon name="visibility-off" size={28} color="#666" />
              </BaseButton>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description style={styleSheet.moneyDisplay}>R$ 253.611,50</Description>
            </CardContent>
            <CardFooter>
              <Icon name="attach-money" size={20} color="#666" />
              <Annotation>
                Transferência de R$250.000,00 recebida de Jair Messias Bolsonaro
              </Annotation>
              <Icon name="keyboard-arrow-right" size={20} color="#666" />
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
