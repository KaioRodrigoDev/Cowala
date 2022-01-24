import {
  Container,
  Title,
  SubTitle,
  BtnPrimary,
  BtnIcon,
  TitleD,
  ContainerIcon,
  SimpleInput,
  SendButton
} from '../../style/styles'
import { useState } from 'react'

export default function App({ navigation }) {
  let fibo = 2
  let fibo1 = 0
  let fibo2 = 1
  let fibo3 = 0
  const [cont, setCont] = useState('')
  let [result, setResult] = useState([''])
  function fibonacci(n) {
    result = ['']
    while (fibo <= n) {
      fibo3 = fibo1 + fibo2

      result.push(fibo3 + ' ')
      setResult[fibo3]

      fibo1 = fibo2
      fibo2 = fibo3
      fibo += 1
    }
    alert(result)
  }
  return (
    <Container>
      <SubTitle>Digite a quantidades de termos em fibonacci</SubTitle>
      <SimpleInput value={cont} onChangeText={cont => setCont(cont)} />
      <SendButton onPress={() => fibonacci(cont)}>
        <TitleD>Calcular</TitleD>
      </SendButton>
      <TitleD>{result}</TitleD>
    </Container>
  )
}
