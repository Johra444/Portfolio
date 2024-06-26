import Head from "next/head";
import Header from "../components/Header";
import gif from "../public/gif.gif";
import dna from "../public/dna.gif";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Beries from "../public/Beries.png";
import blueberry from "../public/blueberry.png";
import cryptoList from "../public/cryptoList.png";
import hlc from "../public/hlc.png";
import alien from "../public/alien.png";
import hlchub from "../public/hlchub.png";
import ethporto from "../public/eth.png";
import istanbul from "../public/istanbul.jpeg";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="h-full">
      <Head>
        <title>Johra</title>
        <link rel="icon" href="/luffy.jpg" />
      </Head>
      <Header />
      <div class="container max-w-lg mx-auto px-8 ">
        <Image src={dna} alt="gif" className="animate-opacityTransition2" />
        <div className="animate-opacityTransition2">
          <h1 className="text-xl font-semibold underline underline-offset-8  decoration-4 pb-10 decoration-peach">
            Stack
          </h1>

          <p className="font-bold ">Front-end</p>
          <p className="pb-8">
          Typescript, ReactJs, NextJs, TailwindCss
          </p>

          <p className="font-bold pr-4 ">Other</p>
          <p className="pb-10">Solidity, EtherJs, Hardhat, Git, Firebase ect</p>
          <h1 className="text-xl font-semibold underline underline-offset-8  decoration-4 pb-10 decoration-peach">
            Works
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-center">
          <a
              href="https://ethglobal.com/showcase/grow-or-gamble-wv16o"
              target="_blank"
            >
              <div className="pb-8">
                <Image src={istanbul} alt="image" className="rounded-lg" contain />
                <p className="font-bold text-xl py-2">Eth Istanbul</p>
                <p className="text-sm">
                Rewarded at ETH Istanbul hackathon
                </p>
              </div>
            </a>
            <a
              href="https://hlc-hub-final-k724.vercel.app/"
              target="_blank"
            >
              <div className="pb-8">
                <Image src={hlchub} alt="image" className="rounded-lg" contain />
                <p className="font-bold text-xl py-2">HLC Hub</p>
                <p className="text-sm">
                  New hub of HoodlifeClub
                </p>
              </div>
            </a>
            <a
              href="https://twitter.com/eth_porto/status/1637157159682097152"
              target="_blank"
            >
              <div className="pb-8">
                <Image src={ethporto} alt="image" className="rounded-lg" />
                <p className="font-bold text-xl py-2">🥇 Eth Porto</p>
                <p className="text-sm">
                  Winner of ETH Porto hackathon (Bundler wallet)
                </p>
              </div>
            </a>
            <a
              href="https://www.888alien.com/"
              target="_blank"
            >
              <div className="pb-8">
                <Image src={alien} alt="image" className="rounded-lg" />
                <p className="font-bold text-xl py-2">Alien</p>
                <p className="text-sm">
                  888Alien is a collection of 888 unique aliens on Arbitrum
                </p>
              </div>
            </a>
            <a
              href="https://be-ries-last.vercel.app/"
              target="_blank"
            >
              <div className="pb-8">
                <Image src={Beries} alt="image" className="rounded-lg" />
                <p className="font-bold text-xl py-2">BeRies</p>
                <p className="text-sm">
                  Mint differents pack (NFTs), burn them and fill a form to
                  receive the items (not live yet)
                </p>
              </div>
            </a>
            <a href="https://withdraw-beries.vercel.app/" target="_blank">
              <div className="pb-8">
                <Image src={hlc} alt="image" className="rounded-lg" />
                <p className="font-bold text-xl py-2">BeRies x HoodlifeClub</p>
                <p className="text-sm">
                  Almost same as BeRies, but for one item (deployed on Arbitrum)
                </p>
              </div>
            </a>
            <a href="https://blueberry-coin.vercel.app/" target="_blank">
              <div className="pb-2">
                <Image src={blueberry} alt="image" className="rounded-lg" />
                <p className="font-bold text-xl py-2">Blueberry Coin</p>
                <p className="text-sm">
                  Fanmade Blueberry Coin (ICO) on testnet, airdrop for GBC
                  holders
                </p>
              </div>
            </a>
            <a href="https://johra444.github.io/Crypto-List/" target="_blank">
              <div className="pb-2">
                <Image src={cryptoList} alt="image" className="rounded-lg" />
                <p className="font-bold text-xl py-2">CryptoGOGO</p>
                <p className="text-sm">
                  The first website I finished, list of the top 100
                  cryptocurrency using CoinGecko API
                </p>
              </div>
            </a>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}