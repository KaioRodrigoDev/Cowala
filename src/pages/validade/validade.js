import {
  Container,
  Title,
  SubTitle,
  BtnPrimary,
  BtnIcon,
  TitleD,
  ContainerIcon,
  LargeInput,
  SendButton
} from '../../style/styles'
import { TextInputMask } from 'react-native-masked-text'
import { useState } from 'react'

export default function App({ navigation }) {
  const [date, setDate] = useState('')

  function data() {
    var now = new Date()
    var test = Math.abs(now.getTime() - date)
    alert(Math.ceil(test / (1000 * 60 * 60 * 24 * 30)))
    alert(now)
  }

  return (
    <Container>
      <Title>Digite algo validade</Title>

      <TextInputMask
        style={{
          width: '50%',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundColor: '#FFF',
          color: '#121212',
          marginTop: '3%'
        }}
        placeholder="Data"
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY'
        }}
        value={date}
        onChangeText={d => setDate(d)}
      />

      <SendButton onPress={data}>
        <TitleD>OI</TitleD>
      </SendButton>
    </Container>
  )
}
