import * as React from 'react';
import ReactDOM from 'react-dom';
import { SharedPortalProps } from '../../types/SharedPortalProps';
import { CartWidget } from '../../components/CartWidget';

export const CartPortal: React.FC<SharedPortalProps> = (props) => {
  const cartPortalDiv = document.getElementById('cart');

  if (!cartPortalDiv) {
    return null;
  }
  return ReactDOM.createPortal(<CartWidget {...props} />, cartPortalDiv);
};
