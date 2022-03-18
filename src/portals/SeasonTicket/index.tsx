import * as React from 'react';
import ReactDOM from 'react-dom';
import { SharedPortalProps } from '../../types/SharedPortalProps';
import { SeasonTicketWidget } from '../../components/SeasonTicketWidget';

export const SeasonTicketPortal: React.FC<SharedPortalProps> = (props) => {
  const seasonTicketPortalDiv = document.getElementById('cart');

  if (!seasonTicketPortalDiv) {
    return null;
  }
  return ReactDOM.createPortal(
    <SeasonTicketWidget {...props} />,
    seasonTicketPortalDiv,
  );
};
