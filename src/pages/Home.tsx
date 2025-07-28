
import * as React from 'react';
import { Title1, Button, Title3, Divider } from '@fluentui/react-components';

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Counter: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}

export default function Home() {
  return (
    <>
    <div>
      <Title1>Home Page</Title1>
        <p>Welcome to the SSR React app using React Router v7 and Fluent 2!</p>
      </div>
      <div>
        <Title3>Hydrated React component Example</Title3>
        <Counter />
    </div>
    </>
  );
}
