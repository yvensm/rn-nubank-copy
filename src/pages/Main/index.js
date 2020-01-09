import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

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
  const translateY = new Animated.Value(0);
  let offset = 0;

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true},
  );
  function onHandlerStateChange(event){
    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false;
      const {translationY} = event.nativeEvent;
      
      offset += translationY
      translateY.setOffset(offset);
      translateY.setValue(0);
     
      if(translationY >= 100){
        opened = true;
      } else{
        translateY.setValue(offset);
        translateY.setOffset(0);
      }
      
      Animated.timing(translateY,{
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(()=>{
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
      
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY}/>

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform:[{
              translateY: translateY.interpolate({
                inputRange: [-350,0, 380],
                outputRange: [-20 ,0, 380],
                extrapolate: 'clamp',
              }),
            }],
          }}
          >
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <HeaderTitle>NuConta</HeaderTitle>
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 253.611,50</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$250.000,00 recebida de Jair Messias Bolsonaro
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY}/>
    </Container>
  );
}
