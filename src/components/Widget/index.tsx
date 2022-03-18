import * as React from 'react';
import { SharedPortalProps } from '../../types/SharedPortalProps';
import Big from 'big.js';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';

export type WidgetProps = SharedPortalProps & {
  title: string;
};

export const Widget: React.FC<WidgetProps> = ({
  title,
  count,
  incrementCount,
}) => (
  <div>
    <h1 className="colour-blue">{title}</h1>
    <FaCheck />
    <p>Count: {Big(count).toFixed(2)}</p>
    <button onClick={incrementCount}>Increment count</button>
    <hr />
  </div>
);
