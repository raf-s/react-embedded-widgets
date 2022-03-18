import * as React from 'react';
import { SharedPortalProps } from '../../types/SharedPortalProps';
import { Widget } from '../Widget';

export const CartWidget: React.FC<SharedPortalProps> = (props) => (
  <Widget title="Cart Widget" {...props} />
);
