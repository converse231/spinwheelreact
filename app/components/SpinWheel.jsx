"use client";

import Image from "next/image";
import React, { useState } from "react";

function SpinWheel() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const singleRotation = 360 / 18;
  // const wheelSpinNumbers = [
  //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  // ];

  const wheelSpinNumbers = [1, 1, 7, 7, 7, 7, 3, 3, 3];
  const r2 = singleRotation * randomNumber;

  function generateRandomNumber() {
    setSpinning(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * wheelSpinNumbers.length);
      setRandomNumber(wheelSpinNumbers[randomIndex]);
      setSpinning(false);
    }, 2000);
    // Adjust the duration of the spinning effect as needed
  }

  return (
    <div className="bg-red-500 p-10 flex gap-10 relative rounded-2xl shadow-xl">
      <div>
        <div className="absolute -top-5 left-[190px] z-50">
          <Image src={"/location.png"} alt="pointer" width={100} height={100} />
        </div>
        <Image
          style={{
            transform: `rotate(-${spinning ? r2 + 3600 : r2}deg)`, // Rotate more than one full circle for spinning effect
            transition: "transform 2s ease-in-out", // Transition for spinning effect// Transition for spinning effect
          }}
          src={"/rolute-sample.png"}
          width={400}
          height={400}
          alt="rollete"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/desktop text-small.png"}
          alt=""
          height={200}
          width={200}
          className="mb-10"
        />
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg"
          />
          <button
            onClick={() => generateRandomNumber()}
            className="px-4 py-2 bg-red-700 uppercase font-bold text-white rounded-xl"
          >
            Play Now
          </button>
          <p className="text-white font-bold text-2xl text-center">
            You won {randomNumber + 1}
          </p>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold">Odds</h2>
            <p className="text-white">2 = 50%, </p>
            <p className="text-white">8 = 20%, </p>
            <p className="text-white">4 = 30%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpinWheel;
