import Head from "next/head";
import Header from "../components/Header";
import gif from "../public/gif.gif";
import dna from "../public/dna.gif";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Beries from "../public/beries.png";
import blueberry from "../public/blueberry.png";
import cryptoList from "../public/cryptoList.png";
import hlc from "../public/hlc.png";

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
            HTML, CSS, Javscript, ReactJs, NextJs, TailwindCss
          </p>

          <p className="font-bold pr-4 ">Other</p>
          <p className="pb-10">Solidity, EtherJs, Hardhat, Git, Firebase</p>
          <h1 className="text-xl font-semibold underline underline-offset-8  decoration-4 pb-10 decoration-peach">
            Works
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-center">
            <a
              href="https://repository-images.githubusercontent.com/279611541/b7e1e580-c611-11ea-9b24-523c65baea0e"
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
            <a
              href="https://withdraw-beries.vercel.app/"
              target="_blank"
            >
              <div className="pb-8">
                <Image src={hlc} alt="image" className="rounded-lg" />
                <p className="font-bold text-xl py-2">BeRies x HoodlifeClub</p>
                <p className="text-sm">
                  Almost same as BeRies, but for one item (deployed on Arbitrum)
                </p>
              </div>
            </a>
            <a
              href="https://blueberry-coin.vercel.app/"
              target="_blank"
            >
              <div className="pb-2">
                <Image src={blueberry} alt="image" className="rounded-lg" />
                <p className="font-bold text-xl py-2">Blueberry Coin</p>
                <p className="text-sm">
                  Fanmade Blueberry Coin (ICO) on testnet, airdrop for GBC
                  holders
                </p>
              </div>
            </a>
            <a
              href="https://johra444.github.io/Crypto-List/"
              target="_blank"
            >
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
