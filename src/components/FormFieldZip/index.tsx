import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { TextInputMaskProps } from 'react-native-masked-text';
import { MapMark } from '../../assets/icons/MapMark';
import { useToast } from '../../hooks/toast';
import axios from 'axios';
import { formatPrice } from '../../utils/formatPrice';
import { 
  Container, 
  Input, 
  Label, 
  InputContainer, 
  Button,
  ZipDescription,
  ZipSpecification,
  Bold
} from './styles';
import { useLoading } from '../../hooks/loading';

type Props =  TextInputMaskProps & {
  label: string;
  shipping: number;
  setShipping: React.Dispatch<React.SetStateAction<number>>;
}

type Adress = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function FormFieldZip({ label, setShipping, shipping, ...rest }: Props) {

  const { showToast } = useToast();
  const { showLoading } = useLoading();

  const [ address, setAddress ] = useState<Adress>({} as Adress);

  async function handleCalculateShipping() {
    if (rest.value && rest.value.length < 9 || !rest.value) {
      showToast({
        message: 'CEP inválido',
        show: true,
        type: 'error'
      });
      Keyboard.dismiss();
      return setShipping(0);
    };

    try {
      showLoading(true);

      const { data } = await axios.get(`https://viacep.com.br/ws/${rest.value}/json`);

      showLoading(false);

      if('erro' in data) throw new Error('Erro ao calcular o preço do frete');

      const shippingPrice = data.uf === 'PE' ? 100 : 200;

      Keyboard.dismiss();

      setShipping(shippingPrice);


      setAddress({
        bairro: data.bairro,
        localidade: data.localidade,
        logradouro: data.logradouro,
        uf: data.uf
      });
      
    } catch (error) {
      showLoading(false);

      showToast({
        message: 'Erro ao calcular o preço do frete',
        show: true,
        type: 'error'
      });

      setShipping(0);

      setAddress({
        bairro: '',
        localidade: '',
        logradouro: '',
        uf: ''
      });

      Keyboard.dismiss();
    }

  }

  return (
    <Container>
      <Label>
        {label}
      </Label>

      <InputContainer>
        <Input 
          {...rest} 
          onEndEditing={handleCalculateShipping} 
          returnKeyType="send" 
        />


        <Button
          activeOpacity={0.7}
          onPress={handleCalculateShipping}
        >
          <MapMark />
        </Button>
      </InputContainer>


      {shipping > 0 && (
        <ZipSpecification>
          <ZipDescription>
            {address.logradouro}, {address.bairro} - {address.localidade} - {address.uf} {'\n'}

            <Bold>
              valor do frete: {formatPrice(shipping)}
            </Bold>
          </ZipDescription>
        </ZipSpecification>
      )}

    </Container>
  )
}