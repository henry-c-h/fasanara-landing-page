import { useState, useRef, useEffect } from 'react';

const StatsCard = ({ stat, text, isFloat = false, hasPlusSign = false }) => {
  const [count, setCount] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef();
  const duration = 1500;

  useEffect(() => {
    const step = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      if (isFloat) setCount((progress * stat).toFixed(1));
      else setCount(Math.floor(progress * stat));

      if (elapsed < duration) requestAnimationFrame(step);
      else setCount(stat);
    };
    requestRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(requestRef.current);
  }, [stat, isFloat]);

  return (
    <div className="stats-card">
      <p className="stats-card__stat">
        {isFloat ? `$${count}B` : `${hasPlusSign ? `${count}+` : `${count}`}`}
      </p>
      <p className="stats-card__text">{text}</p>
    </div>
  );
};

export default StatsCard;
