import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.View`
  flex:1;
  background: #8B10AE;
  justify-content:center;
  
`;


export const Content = styled.View`
  flex: 1;
  max-height: 70%;
  z-index: 5;
  justify-content:center;
  align-items:center;
`;

export const Card = styled(Animated.View)`
  flex:1;
  border-radius:4px;
  background:#FFF;
  margin: 0 20px;
  height:70%;
  position:absolute;
  left:0;
  right:0;
  top: 15%;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding:30px;
`;

export const CardContent = styled.View`
  flex:1;
  padding: 0 30% 0 20px;
  /* justify-content:center; */
  top:0;
`;

export const Title = styled.Text`
  font-size:13px;
  color: #999;
`;

export const Description = styled(Animated.Text)`
  font-size: 28px;
  margin-top: 3px;
`;

export const CardFooter = styled.View`
  flex-direction:row;
  justify-content:center;
  align-items:center;
  padding: 30px 40px;
  background: #eee;
  border-radius:4px;
`;

export const AnimatedIcon = styled(Animated.View)`

`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
  margin-left:10px
`;


export const HeaderTitle = styled.Text`
  font-size:18px;
  padding-right: 120px;
  color:#999;

`;


