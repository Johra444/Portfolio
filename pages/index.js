import Head from 'next/head'
import Header from '../components/Header'
import gif from '../public/gif.gif'
import luffy from '../public/luffy.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

export default function Home() {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (

    <div className='h-full'>
      <Head>
        <title>Johra</title>
        <link rel="icon" href="/luffy.jpg" />
      </Head>
      <Header />
      <div class="container max-w-lg mx-auto px-6 ">
        <Image src={gif} alt="gif" className='animate-opacityTransition2'/>
        <article>
          <div className='animate-opacityTransition2'>
          <div className=' max-w-lg mb-6 ml-auto mr-auto rounded-lg bg-[#F4EDE4] dark:bg-gris2 p-3 text-center'>
            <h1 className=''>Hello, I'm an indie app developer based in France!</h1>
          </div>
            <div className='w-[100%] md:flex'>
              <div className='w-[80%]'>
                <p className='text-4xl font-bold'>Johra</p>
                <p className='text-l '>One piece, cryptocurrency, privacy</p>
              </div>
              <div className=' w-[20%]'>
                <Image src={luffy} alt="gif" className='rounded-full'/>
              </div>
            </div>
            </div>
          <div className='animate-opacityTransition'>
            <h1 className='text-xl font-semibold underline underline-offset-8 decoration-gris2 decoration-4'>Work</h1>
            <p className='mt-4 indent-3 text-justify'>
            I'm a french freelance full-stack Blockchain developer (fiouuu), I've always liked being on my computer and didn't know what to do in life, i started
            to make some money on internet in 2020 during covid, then wanted to invest in cryptocurrency, my bank had banned every crypto exchange, i found a way and ALL IN. Then I've got interested in code, to audit smart contracts myself</p>
          <div className='flex justify-center m-5'>
            <Link href='/'>
              <button className='bg-myPurple py-2 px-5 rounded-md text-gris font-semibold'>My portfolio {'>'}</button>
            </Link>
          </div>
          <h1 className='text-xl font-semibold underline underline-offset-8 decoration-gris2 decoration-4'>Bio</h1>
          <div className='flex mt-4'>
            <p className='font-bold pr-4'>2001</p>
            <p>Hello World
            </p>
          </div>
          <div className='flex'>
            <p className='font-bold pr-4'>2019</p>
            <p>Graduated Highschool / Make money online / Got interested by cryptocurrency</p>
          </div>
          <div className='flex'>
            <p className='font-bold pr-4'>-<br />2020</p>
          </div>
          <div className='flex'>
            <p className='font-bold pr-4'>2021</p>
            <p>Learn Frontend</p>
          </div>
          <div className='flex'>
            <p className='font-bold pr-4'>2022 - current</p>
            <p>Learn Solidity and blockchain related topics</p>
          </div>
          <h1 className='text-xl mt-5 font-semibold underline underline-offset-8 decoration-gris2 decoration-4'>I ♥</h1>
          <p className='mt-4 indent-3 text-justify'>
            One piece, blockchain/cryptocurrency</p>
            <h1 className='text-xl mt-5 font-semibold underline underline-offset-8 decoration-gris2 decoration-4'>On the web</h1>   
            <a href='https://github.com/Johra444' target='_blank'><p className='mt-4 indent-3 text-justify font-bold text-myPurple'>Github</p></a>
            <a href='https://twitter.com/Johra444' target='_blank'><p className='mt-4 indent-3 text-justify font-bold'>Twitter</p></a>
          </div>
        </article>
        <Footer />
      </div>
    </div>
  )
}