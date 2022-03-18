import * as React from 'react';
import { CartPortal } from './portals/Cart';
import { SeasonTicketPortal } from './portals/SeasonTicket';
import { format } from 'date-fns';

export const App: React.FC = () => {
  const [dateState, setDateState] = React.useState(new Date());
  const [count, setCount] = React.useState(0);
  const incrementCount = () => setCount(count + 1);

  React.useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Root App</h1>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment count</button>
        <br/>
        <div>Time now: {format(dateState, 'dd/MM/yyyy HH:mm:ss')}</div>
        <hr />
      </div>
      {/* Portals */}
      <CartPortal count={count} incrementCount={incrementCount} />
      <SeasonTicketPortal count={count} incrementCount={incrementCount} />
    </>
  );
};
