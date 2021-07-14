import React, { useState, useEffect, useCallback } from 'react';
import { Title } from '../../components/Title';
import { EmptyCart } from '../../components/EmptyCart';
import { useCart } from '../../hooks/cart';
import { CartListItem } from '../../components/CartListItem';
import { FormFieldZip } from '../../components/FormFieldZip';
import { 
  CartContainer, 
  CartList, 
  Divider, 
  BoldText,
  Items,
  RegularText,
  Shipping,
  TotalContainer,
  BoldTextPrice,
  InfoContainer,
  FinalizeContainer,
  Wrapper,
  RegularTextFinalize,
  BoldTextFinalize
} from './styles';
import { CartCheck } from '../../assets/icons/CartCheck';
import { theme } from '../../global/styles';
import { transformToNumber } from '../../utils/transformToNumber';
import { formatPrice } from '../../utils/formatPrice';
import { ModalConfirm } from '../../components/ModalConfirm';


export function Cart() {

  const { cart, addProductToCart } = useCart();

  const [ zipCode, setZipCode ] = useState('');
  const [ shipping, setShipping ] = useState(0);
  const [ totalPrice, setTotalPrice ] = useState(0);
  const [ totalQuantity, setTotalQuantity ] = useState(0);
  const [ showModal, setShowModal ] = useState(false);

  const calculateDiscount = useCallback((totalPrice: number) => {
    const discount = 0.25;
    const quantityToHaveDiscount = 3;

    const totalWithDiscount =  cart
      .filter(product => product.quantity >= quantityToHaveDiscount)
      .reduce((prev, current) => {
        const priceToDiscount = transformToNumber(current.product.price) * discount;
        
        const quantityToDiscount = Math.floor(current.quantity / quantityToHaveDiscount);
        
        const totalDiscount = priceToDiscount * (quantityToDiscount * quantityToHaveDiscount);
        
        return prev + totalDiscount;
      }, 0);
      
    return totalPrice - totalWithDiscount;
  }, [ cart, transformToNumber ]);

  useEffect(() => {
    const totalCartPrice = cart.reduce((prev, current) => {
      return prev + transformToNumber(current.product.price) * current.quantity;
    }, 0);

    const totalCartQuantity = cart.reduce((prev, current) => prev + current.quantity , 0);

    const totalWithDiscount = calculateDiscount(totalCartPrice);

    setTotalPrice(shipping ? totalWithDiscount + shipping : totalWithDiscount);
    setTotalQuantity(totalCartQuantity);

  }, [ addProductToCart, shipping ]);

  return (
    <CartContainer>
      <InfoContainer>
        <Title 
          title="Seu"
          titleBold="Carrinho"
        />
        
        <ModalConfirm 
          modalVisible={showModal}
          setModalVisible={setShowModal}
          redirect="Products"
          totalPrice={formatPrice(totalPrice)}
        />

          {cart.length === 0 ? <EmptyCart /> : (
            <>
              <CartList 
                data={cart}
                renderItem={({item}) => (
                  <CartListItem data={item}/>
                )}
                keyExtractor={item => item.product.id.toString()}
                showsVerticalScrollIndicator={true}
              />
        
              <Divider />
        
              <FormFieldZip 
                label="Calcule o frete"
                type={'zip-code'}
                value={zipCode}
                onChangeText={setZipCode}
                placeholder="seu cep"
                shipping={shipping}
                setShipping={setShipping}
              />

              <TotalContainer>
                {shipping > 0 && (
                  <Shipping>
                    <RegularText>
                      frete
                    </RegularText>

                    <BoldText>
                      {formatPrice(shipping)}
                    </BoldText>
                  </Shipping>
                )}

                <Items>
                  <RegularText>
                    {totalQuantity} ite{totalQuantity === 1 ? 'm': 'ns'}
                  </RegularText>

                  <BoldTextPrice>
                    {formatPrice(totalPrice)}
                  </BoldTextPrice>
                </Items>
              </TotalContainer>
            </>
          )}

      </InfoContainer>
      <FinalizeContainer
        activeOpacity={0.6}
        disabled={!shipping}
        onPress={() =>  setShowModal(true)}
      >
        <Wrapper>
          <RegularTextFinalize disabled={!shipping}>
            Finalizar {' '}
          </RegularTextFinalize>

          <BoldTextFinalize disabled={!shipping}>
            Compra
          </BoldTextFinalize>
        </Wrapper>

        <CartCheck color={!shipping ? theme.colors.cardBackgroundDisabled : '#fff'}/>
      </FinalizeContainer>
    </CartContainer>
  )
}