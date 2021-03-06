import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type Props = {
  color: string;
}

export function CartCheck({color}: Props) {
  return (
    <Svg id="fi-rr-shopping-cart-check" width="23.978" height="24" viewBox="0 0 23.978 24">
      <Circle id="Ellipse_8" data-name="Ellipse 8" cx="2" cy="2" r="2" transform="translate(5 20)" fill={color}/>
      <Circle id="Ellipse_9" data-name="Ellipse 9" cx="2" cy="2" r="2" transform="translate(15 20)" fill={color}/>
      <Path id="Path_6" data-name="Path 6" d="M23.685,1.336a1,1,0,0,0-1.414,0L17.112,6.5,15.561,4.881a1,1,0,0,0-1.442,1.386l1.614,1.679a1.872,1.872,0,0,0,1.345.6h.033a1.873,1.873,0,0,0,1.335-.553L23.685,2.75a1,1,0,0,0,0-1.414Z" fill={color}/>
      <Path id="Path_7" data-name="Path 7" d="M21.9,9.016a1,1,0,0,0-1.162.807l-.128.709A3,3,0,0,1,17.657,13H5.418l-.94-8H11a1,1,0,0,0,0-2H4.242L4.2,2.648A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.829-2H17.657a5,5,0,0,0,4.921-4.113l.128-.71A1,1,0,0,0,21.9,9.016Z" fill={color}/>
    </Svg>
  )
}