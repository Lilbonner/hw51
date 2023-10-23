// Ball.tsx
import React from 'react';

interface BallProps {
  number: number;
}

const Ball: React.FC<BallProps> = ({ number }) => {
  return <div>{number}</div>;
};

export default Ball;
