import React from 'react';
import { Keyboard } from 'react-native';
import { TextInputMaskProps } from 'react-native-masked-text';
import { MapMark } from '../../assets/icons/MapMark';
import { useToast } from '../../hooks/toast';
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

type Props =  TextInputMaskProps & {
  label: string;
  shipping: boolean;
  setShipping: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FormFieldZip({ label, setShipping, shipping, ...rest }: Props) {

  const { showToast } = useToast();

  function handleCalculateShipping() {
    if (rest.value && rest.value.length < 9 || !rest.value) {
      showToast({
        message: 'CEP inválido',
        show: true,
        type: 'error'
      });
      Keyboard.dismiss()
      return setShipping(false);
    };

    Keyboard.dismiss()
    setShipping(true);
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


      {shipping && (
        <ZipSpecification>
          <ZipDescription>
            Rua Comendador Sá Barreto, Piedade - Jab...{'\n'}

            <Bold>
              valor do frete: R$100,00
            </Bold>
          </ZipDescription>
        </ZipSpecification>
      )}

    </Container>
  )
}