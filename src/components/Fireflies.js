import React, { useMemo } from "react";

const FIREFLY_COUNT = 14;

const random = (min, max) => min + Math.random() * (max - min);

const Fireflies = () => {
  const flies = useMemo(
    () =>
      Array.from({ length: FIREFLY_COUNT }, (_, i) => ({
        id: i,
        style: {
          "--fly-left": `${random(2, 98)}%`,
          "--fly-size": `${random(2.5, 5)}px`,
          "--fly-duration": `${random(16, 32)}s`,
          "--fly-delay": `${random(-32, 0)}s`,
          "--fly-drift": `${random(-70, 70)}px`,
          "--fly-glow-delay": `${random(-4, 0)}s`,
        },
      })),
    []
  );

  return (
    <div className="fireflies" aria-hidden="true">
      {flies.map(({ id, style }) => (
        <span key={id} className="firefly" style={style} />
      ))}
    </div>
  );
};

export default Fireflies;
