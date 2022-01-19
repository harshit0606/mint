import React, { useState } from "react";
import Link from "next/link";
import classes from "../../styles/homee.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Head from "next/head";
import { useRouter } from 'next/router'
export default function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  const handleClick = (e, path) => {
    e.preventDefault()
 
     if (path === "/") {
       setMobileMenuOpen(false);
       router.push(path)
     }
     if (path === "/") {
      setMobileMenuOpen(false);
        router.push(path)
     }
     if (path === "/") {
      setMobileMenuOpen(false);
      router.push(path)
   }
   };
 
  const menu=(
    <>
    <div className={classes.header}>
      <div className={classes.mini}>
      <div className={classes.empty}></div>
      <div className={classes.centerr}>
      <p onClick={(e)=>handleClick(e,"/home")}>Home</p>
      <p onClick={(e)=>handleClick(e,"/home/#lore")}>Lore</p>
      <p onClick={(e)=>handleClick(e,"/")}>Mint</p>
      </div>
      </div>
      <div className={classes.mintbtn}>
      <WalletMultiButton />
      </div>
    </div>
    
    </>
  );

  const menuItems = (
    <>
      <div className="mr-auto pl-3">
        <Link
          passHref
          href="https://google.com"
          className="hover:cursor-pointer"
        >
          <a
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="font-monstmedium text-white block uppercase lg:inline-block px-4 lg:mr-2 hover:text-indigo-500"
          >
            Home
          </a>
        </Link>
        <Link passHref href="/" className="hover:cursor-pointer">
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-monstmedium text-white block uppercase lg:inline-block px-4 lg:mr-2 hover:text-indigo-500"
          >Lore</a>
        </Link>
        <Link passHref href="/" className="hover:cursor-pointer">
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="font-monstmedium text-white block uppercase lg:inline-block px-4 lg:mr-2 hover:text-indigo-500"
          >Mint</a>
        </Link>
      </div>

      <div className="flex lg:flex-row flex-col">
        {/* <a
          onClick={() => setMobileMenuOpen(false)}
          className="font-link block lg:inline-block px-4 py-4 mx-2 lg:mx-0 lg:ml-2 font-bold text-white bg-purple-600 rounded-full hover:bg-purple-500"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/discord-logo.svg"
            style={{ color: "#fff" }}
            height="40px"
            width="40px"
            alt="discord"
          />
        </a>
        <a
          onClick={() => setMobileMenuOpen(false)}
          className="font-link block lg:inline-block px-4 py-4 mx-2 lg:mx-0 lg:ml-2 font-bold text-white bg-purple-600 rounded-full hover:bg-purple-500"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/twitter-logo.svg"
            height="40px"
            width="40px"
            alt="twitter"
          />
        </a> */}

        <div className="mt-3 ml-3 lg:flex hidden">
          <WalletMultiButton />
        </div>
      </div>
    </>
  );

  const mobileMenu = (
    <nav className={classes.collapse}>
      <div className={classes.mobile}>
      
      <p onClick={(e)=>handleClick(e,"/home")}>Home</p>
      <p onClick={(e)=>handleClick(e,"/home/#lore")}>Lore</p>
      <p onClick={(e)=>handleClick(e,"/")}>Mint</p>
      
      </div>
    </nav>
  );

  return (
    <>
      <Head>
        <title>The Last Wizards</title>
        <meta name="The Last Wizards is an exclusive collection of the Wizardverse consisting of 3,500 NFTs." content="" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <div id="header" className="w-full">
        <div>
          <div className="ml-4">
            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2 mt-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </button>

            {mobileMenuOpen ? mobileMenu : ""}

            <div className="hidden lg:flex items-center w-full " id="links">
              {menu}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
