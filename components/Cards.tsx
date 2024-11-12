"use client";
import React from "react";
import { useState } from "react";
import bgimg from "../public/assets/images/Background (1).gif";
import Image from "next/image";
import bitfinity from "../public/assets/images/image 399.svg";
import rightarrow from "../public/assets/images/Group 548.svg";
import leftarrow from "../public/assets/images/Group 549.svg";
import img1 from "../public/assets/images/image1.svg";
import earth from "../public/assets/images/Group 38.svg";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cards = [
    {
      title: "Earth Protocol is Now Live on Bitfinity Testnet!",
      description: "We’re excited to launch Earth Protocol’s Incentivized ...",
    },
    {
      title: "Introducing EARTH — the endgame for Bitcoin LSTs",
      description:
        "In 2024, BitcoinFi emerged as a significant player in the...",
    },
    {
      title: "EARTH Protocol Partners with Bitfinity to Launch $ORE",
      description:
        "We’re thrilled to announce our partnership with Bitfinity ...",
    },
  ];

  const totalCards = cards.length;
  const handleNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalCards);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalCards) % totalCards);
  };

  // Calculate the indexes of the three cards to display in a circular way
  const getVisibleCards = () => {
    return [
      cards[currentIndex],
      cards[(currentIndex + 1) % totalCards],
      cards[(currentIndex + 2) % totalCards],
    ];
  };
  return (
    <div className="relative h-screen w-full bg-black">
      <Image src={bgimg} alt="" className=" object-cover w-full h-full" />
      {/* NAVBAR */}
      {/* <div className="absolute top-0  w-full h-1/5 items-center text-white p-10 flex justify-between">
        <Image src={earth} alt="corelogo" className="mt-4" width={250} />
        <div className="flex justify-between gap-x-10">
          <span>DOCS</span>
          <span>MEDIUM</span>
          <span>TWITTER</span>
          <span>DISCORD</span>
        </div>
      </div> */}
      <div className="absolute top-0 w-full h-1/5 items-center text-white p-10 flex justify-between flex-row md:gap-0 gap-4 md:items-center ">
        <Image
          src={earth}
          alt="corelogo"
          className="mt-4 md:w-[250px] w-[150px]"
        />

        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-10 items-start md:items-center mt-4 md:mt-0`}
        >
          <span className="text-sm md:text-base">DOCS</span>
          <span className="text-sm md:text-base">MEDIUM</span>
          <span className="text-sm md:text-base">TWITTER</span>
          <span className="text-sm md:text-base">DISCORD</span>
        </div>
      </div>
      {/* BANNER */}
      <div className="absolute top-0  w-full h-4/5 flex flex-col justify-center items-center text-white px-4">
        <div className="flex gap-x-4 flex-wrap items-center ">
          <h1 className="text-3xl md:text-6xl  font-bold mb-4 titleTextSub">
            Instant Liquidity on
          </h1>
          <Image
            src={bitfinity}
            alt="corelogo"
            className="-mt-2 w-[100px] md:w-[250px]"
          />
        </div>
        <p className="text-md mb-6 text-center body-text">
          Grow your wealth with $ORE, a bitcoin-native
          yield-generating stablecoin.
        </p>

        <button className="bg-gradient-to-r from-green-300 to-green-500 body-text text-black font-semibold py-3 px-4 text-md rounded-3xl shadow-md hover:from-green-500 hover:to-green-600 transition duration-300 flex items-center">
          Mint $ORE
          {/* <FaArrowRightLong className="ml-[0.5rem]" size={20} /> */}
        </button>
      </div>

      {/* Card swipe */}

      <div className="bg-[#000000]/70 absolute bottom-0 left-0 w-full flex h-1/4 flex-row border-t-2 border-[#88e272] backdrop-blur-[50px]">
        {/* NEW UPDATE */}
        <div className="w-1/5 flex flex-col justify-center gap-4 items-center">
          <div className="text-2xl font-medium bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent">
            New Update
          </div>
          <div className="flex flex-row gap-x-4">
            <button onClick={handlePrevSlide}>
              <Image src={leftarrow} alt="" width={56} height={56} />
            </button>
            <button onClick={handleNextSlide}>
              <Image src={rightarrow} alt="" width={56} height={56} />
            </button>
          </div>
        </div>

        {/* Display Current Set of 3 Cards in Circular Fashion */}
        <div className="w-4/5 flex justify-between items-center gap-x-10">
          {getVisibleCards().map((card, index) => (
            <div
              key={index}
              className="w-1/3 flex flex-col items-center border border-white pl-4 pt-4"
            >
              {/* Card Heading */}
              <div className="h-1/3 text-md font-bold leading-5 text-white mb-4">
                {card.title}
              </div>
              {/* Card Body */}
              <div className="h-2/3 flex justify-between gap-2">
                <div className="w-2/3 flex flex-col justify-between">
                  <p className="font-normal text-sm text-white/55">
                    {card.description}
                  </p>
                  <button className="text-[#88e272] text-sm self-start mb-4">
                    Read More
                  </button>
                </div>
                <Image src={img1} alt="" height={105} className="w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
