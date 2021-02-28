import './Counter.scss';
// 取得 useState
import { useState } from 'react';

// 計數器
const Counter = () => {
  const [count, setCount] = useState(5);
  const handleClick = (type) => {
    if(type === 'increment') {
      setCount(count + 1);
    } else if(type === 'decrement') {
      setCount(count - 1);
    } else {
      return;
    }
  }
  // JSX
  return (
    <div className="container">
      <div className={`chevron chevron-up ${count >= 10 && 'visibility-hidden'}`} onClick={() => handleClick('increment')} />
        <div className="number">{count}</div>
      <div className={`chevron chevron-down ${count <= 0 && 'visibility-hidden'}`} onClick={() => handleClick('decrement')} />
    </div>
  );
}

export default Counter;