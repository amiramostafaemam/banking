"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <>
      <CountUp
        className="w-full"
        decimal=","
        suffix=" EGP"
        decimals={2}
        duration={1.5}
        end={amount}
      />
    </>
  );
};

export default AnimatedCounter;
