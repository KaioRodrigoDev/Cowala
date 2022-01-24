import styled from 'styled-components/native'

//#################### Layouts #####################

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0a1633;
`
export const ContainerIcon = styled.View`
  flex-direction: row;
  padding-top: 15px;
  width: 30%;
  justify-content: space-between;
`

//#################### Textos #####################

export const Title = styled.Text`
  font-size: 30px;
  color: #fff;
`

export const TitleD = styled.Text`
  font-size: 20px;
  color: black;
  text-align: center;
`

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #00d9d0;
`
//#################### Botões #####################
export const BtnPrimary = styled.TouchableOpacity`
  color: #121212;
  margin: 3%;
  padding: 2.4%;
  background-color: #fffafa;
  width: 68%;
  border-radius: 5px;
`

export const BtnIcon = styled.TouchableOpacity``

export const SendButton = styled.TouchableOpacity`
  width: 30%;
  background-color: white;
  margin: 3%;
  padding: 6px;
`

//#################### Inputs #####################
export const SimpleInput = styled.TextInput`
  width: 20%;
  justify-content: center;
  text-align: center;
  background-color: white;
  color: black;
  margin-top: 3%;
`
