import { StatusBar } from 'expo-status-bar'
import { Image, Linking } from 'react-native'
import {
  Container,
  Title,
  SubTitle,
  BtnPrimary,
  BtnIcon,
  TitleD,
  ContainerIcon
} from '../../style/styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App({ navigation }) {
  return (
    <Container>
      <Image source={require('../../img/Logo.png')} />
      <Title>Empresa</Title>
      <SubTitle style={{ paddingBottom: '7%' }}>SOFTWARE</SubTitle>
      <BtnPrimary onPress={() => navigation.navigate('Fibonacci')}>
        <TitleD>Fibonacci</TitleD>
      </BtnPrimary>
      <BtnPrimary onPress={() => navigation.navigate('Classificador')}>
        <TitleD>Classificador</TitleD>
      </BtnPrimary>
      <BtnPrimary onPress={() => navigation.navigate('Faxina')}>
        <TitleD>Faxina</TitleD>
      </BtnPrimary>
      <BtnPrimary onPress={() => navigation.navigate('Validade')}>
        <TitleD>Validade</TitleD>
      </BtnPrimary>
      <BtnPrimary onPress={() => navigation.navigate('Molduras')}>
        <TitleD>Molduras</TitleD>
      </BtnPrimary>
      <ContainerIcon>
        <BtnIcon
          onPress={() => Linking.openURL('https://instagram.com/kaio_dev')}
        >
          <Icon name="instagram" size={25} color="white" />
        </BtnIcon>

        <BtnIcon
          onPress={() => Linking.openURL('https://github.com/NerdinGame')}
        >
          <Icon name="github" size={25} color="white" />
        </BtnIcon>

        <BtnIcon
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/kaio-rodrigo-8392a421a/'
            )
          }
        >
          <Icon name="linkedin" size={25} color="white" />
        </BtnIcon>
      </ContainerIcon>
      <StatusBar style="light" />
    </Container>
  )
}
