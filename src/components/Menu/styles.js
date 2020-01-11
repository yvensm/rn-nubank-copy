import {StyleSheet, Animated} from 'react-native';
import styled from 'styled-components/native';

// ({
//     contentContainerStyle: { alignItems: 'center'},
// })
export const Container = styled(Animated.ScrollView)`
  /* padding:0 20px; */
  
  /* New container */
  flex:1;
  position:absolute;
  z-index:10;
  width:100%;
  padding:0 20px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 5px;
  align-self: center;
`;

// align-self:stretch ocupa todo espaço
export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.6);
`;
export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.6);
`;
export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;
export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 20px;

`;

export const SignOutButtonText = styled.Text`
    color:#FFF;
    font-weight:bold;
    font-size:15px;
`;
export const MenuTextContainer = styled.View`
    flex:1;
    height:15%;
    margin-top:10px;

`;

export const MenuTextContainerRow = styled.View`
    flex-direction:row;
    justify-content:center;
`;

export const MenuText = styled.Text`
    color:#FFF;
    font-size:13px;
`;

