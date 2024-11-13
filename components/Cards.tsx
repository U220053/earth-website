"use client";
import React from "react";
import { useState } from "react";
import bgimg from "../public/assets/images/BACKGROUND 3.gif";
import Image from "next/image";
import bitfinity from "../public/assets/images/image 399.svg";
import rightarrow from "../public/assets/images/Group 548.svg";
import leftarrow from "../public/assets/images/Group 549.svg";
import img1 from "../public/assets/images/image1.svg";
import img3 from "../public/assets/images/Bitcoin.png";
import img2 from "../public/assets/images/Twitter (1).svg";
import earth from "../public/assets/images/Group 38.svg";
import xion from "../public/assets/images/Xion logo.png";
import Link from "next/link";
import { text } from "stream/consumers";
import "../app/App.css";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cards = [
    {
      title: "Earth Protocol is Now Live on Bitfinity Testnet!",
      description: "We're excited to launch Earth Protocol's Incentivized ...",
      descmob: "We're excited to launch Earth Protocol's Incentivized ...",

      img: img1,
      text: "Read More",
      link: "https://medium.com/earth-protocol/earth-protocol-is-now-live-on-bitfinity-testnet-c3e2032db9a7",
      height: 105,
      width: 96.71,
    },
    {
      title: "Introducing EARTH — the endgame for Bitcoin LSTs",
      description:
        "In 2024, BitcoinFi emerged as a significant player in the...",
      descmob: "In 2024, BitcoinFi emerged as a significant ...",
      img: img3,
      text: "Read More",
      link: "https://medium.com/earth-protocol/introducing-earth-the-endgame-for-bitcoin-liquid-re-staking-tokens-e2aa2e1748e0",
      height: 122.96,
      width: 122.96,
    },
    {
      title: "Twitter",

      description: "Follow us on X (formerly Twitter) to stay updated!",
      descmob: "Follow us on X (formerly Twitter) to stay updated!",
      img: img2,
      text: "Visit",
      link: "https://twitter.com/earthprotocol",
      height: 118.78,
      width: 117,
    },
  ];

  const totalCards = cards.length;
  const handleNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalCards);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalCards) % totalCards);
  };

  const getVisibleCards = () => {
    return [
      cards[currentIndex],
      cards[(currentIndex + 1) % totalCards],
      cards[(currentIndex + 2) % totalCards],
    ];
  };

  return (
    <div className="relative h-screen w-full bg-black">
      <Image src={bgimg} alt="" className="object-cover w-full h-full" />

      {/* Navigation */}
      <div className="absolute top-0 w-full z-50">
        <div className="relative flex justify-between items-center text-white px-4 py-4 md:px-10 md:py-6">
          <Image
            src={earth}
            alt="corelogo"
            className="mt-4 md:w-[200px] w-[150px]"
          />

          {/* Hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2"
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

          {/* Desktop menu */}
          <div className="hidden md:flex gap-x-10">
            <a
              href="https://docs.earthfi.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span>DOCS</span>
            </a>
            <a
              href="https://medium.com/earth-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span>MEDIUM</span>
            </a>
            <a
              href="https://x.com/EarthDeFi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span>TWITTER</span>
            </a>
            <a
              href="https://discord.com/invite/PbXud77YPd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <span>DISCORD</span>
            </a>
          </div>

          {/* Mobile menu overlay */}
          {/* <div
            className={`fixed inset-0 bg-black bg-opacity-90 transform transition-transform duration-300 ease-in-out md:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
              <span className="hover:text-green-400 cursor-pointer">DOCS</span>
              <span className="hover:text-green-400 cursor-pointer">
                MEDIUM
              </span>
              <span className="hover:text-green-400 cursor-pointer">
                TWITTER
              </span>
              <span className="hover:text-green-400 cursor-pointer">
                DISCORD
              </span>
            </div>
          </div>
        </div>
      </div> */}
          <div
            className={`fixed top-0 right-0 w-1/2 h-full bg-black border-l border-gray-800 transform transition-transform duration-300 ease-in-out md:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col items-start justify-start h-full pt-20 px-6 gap-y-5">
              <a
                href="https://docs.earthfi.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <span className="hover:text-green-400 cursor-pointer py-4 w-full  ">
                  DOCS
                </span>
              </a>
              <a
                href="https://medium.com/earth-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <span className="hover:text-green-400 cursor-pointer py-4 w-full  ">
                  MEDIUM
                </span>
              </a>
              <a
                href="https://x.com/EarthDeFi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <span className="hover:text-green-400 cursor-pointer py-4 w-full  ">
                  TWITTER
                </span>
              </a>
              <a
                href="https://discord.com/invite/PbXud77YPd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <span className="hover:text-green-400 cursor-pointer py-4 w-full ">
                  DISCORD
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* BANNER */}
      <div className="absolute top-0  w-full h-3/5 md:h-3/5 flex flex-col justify-center items-center text-white px-4">
        <div className="flex gap-x-4 flex-wrap items-center justify-center text-center mb-4 md:mb-0 xl:mb-4">
          <h1 className="text-3xl md:text-6xl  font-bold mb-4 body-text bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent">
            Instant Liquidity on
          </h1>
          <Image
            src={xion}
            alt="corelogo"
            className="md:-mt-8 w-[100px] md:w-[160px]"
          />
        </div>
        {/* <p className="text-md mb-6 text-center body-text">
          Grow your wealth with $ORE, a bitcoin-native
          yield-generating stablecoin.
        </p> */}
        <Link
          href="https://xion.testnet.earthfi.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-r from-[#88E272] via-[#C6FFB8] to-[#88E272] body-text text-black font-semibold py-3 px-6 text-md rounded-3xl shadow-md   flex items-center mt-4 md:mt-0">
            Mint $ORE
            {/* <FaArrowRightLong className="ml-[0.5rem]" size={20} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-[0.5rem]"
            >
              <path d="M2 12c0-.55.45-1 1-1h15.17l-4.88-4.88a1 1 0 1 1 1.42-1.42l6.6 6.6c.39.39.39 1.03 0 1.42l-6.6 6.6a1 1 0 1 1-1.42-1.42L18.17 13H3a1 1 0 0 1-1-1z" />
            </svg>
          </button>
        </Link>
      </div>

      {/* Card swipe */}

      <div className="bg-[#000000]/70 absolute bottom-0 left-0 w-full flex xs:h-1/4 xl:h-[30%] flex-row border-t-2 border-[#88e272] backdrop-blur-[50px] p-4 md:p-0 gap-4">
        {/* NEW UPDATE */}
        <div className="w-1/5 flex flex-col justify-center gap-4 items-center">
          <div className="text-2xl font-medium bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent body-text">
            New Update
          </div>
          <div className="flex flex-row gap-x-1 md:gap-x-4">
            <button onClick={handlePrevSlide}>
              <Image src={leftarrow} alt="" width={56} height={56} />
            </button>
            <button onClick={handleNextSlide}>
              <Image src={rightarrow} alt="" width={56} height={56} />
            </button>
          </div>
        </div>

        {/* Display Current Set of 3 Cards in Circular Fashion */}
        <div className="w-4/5 justify-around items-center gap-x-10 hidden md:flex">
          {getVisibleCards().map((card, index) => (
            <div
              key={index}
              className="w-1/3 2xl:w-auto h-44 flex flex-col items-start border  border-[#ffffff]/35 border-gradient-to-r from-[#ffffff]/35 to-[#676767]/35 pl-4 pt-4"
            >
              {/* Card Heading */}
              <div className="h-1/3  font-bold leading-5 text-white mb-4 2xl:mb-0 body-text">
                {card.title}
              </div>
              {/* Card Body */}
              <div className="h-2/3 flex justify-between gap-2">
                <div className="w-2/3 flex flex-col justify-between">
                  <p className="font-normal text-sm text-white/55">
                    {card.description}
                  </p>
                  <Link href={card.link} target="_blank">
                    <button className="text-[#88e272] text-sm self-start mb-4">
                      {card.text}
                    </button>
                  </Link>
                </div>
                <div className="w-1/3 relative flex justify-end items-end ">
                  <Image
                    src={card.img}
                    alt=""
                    height={card.height}
                    width={card.width}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* MObILE */}
        <div className="w-full sm:w-4/5 flex justify-center items-center gap-x-4 sm:gap-x-10  md:hidden">
          {getVisibleCards()
            .slice(0, 1)
            .map((card, index) => (
              <div
                key={index}
                className="w-full h-44 sm:w-1/3 flex flex-col  border border-[#ffffff]/35 border-gradient-to-r from-[#ffffff]/35 to-[#676767]/35  pl-4 pt-4"
              >
                <div className="h-1/3 text-md font-bold leading-5 text-white mb-4 body-text">
                  {card.title}
                </div>
                <div className="h-2/3 flex justify-between gap-2">
                  <div className="w-2/3 flex flex-col justify-between">
                    <p className="font-normal text-sm text-white/55">
                      {card.descmob}
                    </p>
                    <Link
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-[#88e272] text-sm self-start mb-4">
                        {card.text}
                      </button>
                    </Link>
                  </div>
                  <Image src={card.img} alt="" height={105} className="w-1/3" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
