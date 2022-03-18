import * as React from 'react';
import { Widget } from '../Widget';
import { SharedPortalProps } from '../../types/SharedPortalProps';

export const SeasonTicketWidget: React.FC<SharedPortalProps> = (props) => (
  <Widget title="Season Ticket Widget" {...props} />
);
