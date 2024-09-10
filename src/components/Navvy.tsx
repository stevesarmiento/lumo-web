'use client'

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from './ui/navigation-menu';
import { Button } from './ui/button';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import ButtonSkeu from '@/components/ButtonSkeu';
import {
  IconCubeFill,
  IconXLogo,
  IconTrayAndArrowDownFill,
  IconPersonCropCircleDashed,
  IconBooksVerticalFill,
  IconCubeTransparent,
  IconPersonFillQuestionmark,
  IconDistributeHorizontalCenterFill
} from 'symbols-react';




const Navvy = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navVariants = {
    initial: {
      opacity: 1,
      width: "100%",
      borderRadius: "0px",
      marginTop: "0px",
      padding: "30px 0",
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    scrolled: {
      opacity: 1,
      width: "66%",
      borderRadius: "30px",
      marginTop: "20px",
      padding: "15px 0px",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="z-50 w-screen flex justify-center mb-[120px]">
          <motion.div
            className={`z-20 ${isScrolled ? 'border-[1px] border-black/5 backdrop-blur-xl fixed shadow-lg' : 'fixed'}`}
            variants={navVariants}
            initial="initial"
            animate={isScrolled ? "scrolled" : "initial"}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
          >
            {/* Main Menu */}
            <div className=" bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="">
                    <a href="/">
                      <span className="sr-only">Triton</span>
                      <Image
                        src={"/img/senko-testing.png"}
                        alt="Triton Logo"
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[12px] shadow-lg shadow-black/40 mb-4"
                        width={50}
                        height={37}
                      />
                    </a>
                  </div>

                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                        <NavigationMenuContent
                          className="p-[20px]">
                          <h3 className="text-sm font-bold uppercase tracking-wide text-triton-trey opacity-50 mb-4">
                            Products
                          </h3>
                          <NavigationMenuLink
                            href="/triton-rpc">
                            <div className="group text-triton-trey text-[14px] inline-flex items-start justify-start gap-3 hover:bg-triton-trey/5 rounded-[14px] p-[8px] active:scale-[.99] active:bg-triton-trey/10 mb-2  border border-transparent hover:border-triton-trey/5 transition-all duration-150 ease-in-out">
                              <div className="bg-white border border-triton-trey/10 shadow-md shadow-black/10 flex justify-center items-center rounded-xl p-2">
                                <IconCubeFill className="w-[20px] h-[20px] fill-triton-trey/70 group-hover:fill-triton-trey transition-all duration-150 ease-in-out " />
                              </div>
                              <div className="">
                                <p className="font-bold">
                                  Triton RPC
                                </p>
                                <p className="text-triton-trey/50 group-hover:text-triton-trey/80 transition-all duration-150 ease-in-out">
                                  Choose the most reliable RPC that out performs for your users across blockchains.
                                </p>
                              </div>
                            </div>
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="/pythnet">
                            <div className="group text-triton-trey text-[14px] inline-flex items-start justify-start gap-3 hover:bg-triton-trey/5 rounded-[14px] p-[8px] active:scale-[.99] active:bg-triton-trey/10 mb-2  border border-transparent hover:border-triton-trey/5 transition-all duration-150 ease-in-out">
                              <div className="bg-white border border-triton-trey/10 shadow-md shadow-black/10 flex justify-center items-center rounded-xl p-2">
                                <IconDistributeHorizontalCenterFill className="w-[20px] h-[20px] fill-triton-trey/70 group-hover:fill-triton-trey transition-all duration-150 ease-in-out " />
                              </div>
                              <div className="">
                                <p className="font-bold">
                                  Pythnet
                                </p>
                                <p className="text-triton-trey/50 group-hover:text-triton-trey/80 transition-all duration-150 ease-in-out">
                                  Get reliable pricing data quickly and reliably, all on-chain.
                                </p>
                              </div>
                            </div>
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="/professional-trading-centers">
                            <div className="group text-triton-trey text-[14px] inline-flex items-start justify-start gap-3 hover:bg-triton-trey/5 rounded-[14px] p-[8px] active:scale-[.99] active:bg-triton-trey/10 mb-2  border border-transparent hover:border-triton-trey/5 transition-all duration-150 ease-in-out">
                              <div className="bg-white border border-triton-trey/10 shadow-md shadow-black/10 flex justify-center items-center rounded-xl p-2">
                                <IconCubeTransparent className="w-[20px] h-[20px] fill-triton-trey/70 group-hover:fill-triton-trey transition-all duration-150 ease-in-out " />
                              </div>
                              <div className="">
                                <p className="font-bold">
                                  Professional Trading Centers
                                </p>
                                <p className="text-triton-trey/50 group-hover:text-triton-trey/80 transition-all duration-150 ease-in-out">
                                  Gain an edge in your on-chain transaction execution and access data reliably.
                                </p>
                              </div>
                            </div>
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuLink className="-m-3 flex items-start rounded-xl p-3 transition duration-150 ease-in-out"
                          href="/triton-rpc/#pricing-section">
                          <p
                            className="group inline-flex items-center justify-center rounded-xl p-2 px-4 text-sm font-medium text-black/60 transition duration-150 ease-in-out hover:text-black focus:text-black focus:outline-none hover:bg-black/5 active:bg-black/5 focus:bg-black/5 focus:ring-1 hover:ring-1 ring-black/10"
                          >
                            <span>Pricing</span>
                          </p>
                        </NavigationMenuLink>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                        <NavigationMenuContent
                          className="p-[20px]">
                          <h3 className="text-sm font-bold uppercase tracking-wide text-triton-trey opacity-50 mb-4">
                            Support
                          </h3>
                          <NavigationMenuLink
                            href="/#frequently-asked">
                            <div className="group text-triton-trey text-[14px] inline-flex items-start justify-start gap-3 hover:bg-triton-trey/5 rounded-[14px] p-[8px] active:scale-[.99] active:bg-triton-trey/10 mb-2  border border-transparent hover:border-triton-trey/5 transition-all duration-150 ease-in-out">
                              <div className="bg-white border border-triton-trey/10 shadow-md shadow-black/10 flex justify-center items-center rounded-xl p-2">
                                <IconPersonFillQuestionmark className="w-[20px] h-[20px] fill-triton-trey/70 group-hover:fill-triton-trey transition-all duration-150 ease-in-out " />
                              </div>
                              <div className="">
                                <p className="font-bold">
                                  Frequently Asked Questions
                                </p>
                                <p className="text-triton-trey/50 group-hover:text-triton-trey/80 transition-all duration-150 ease-in-out">
                                  Common questions asked to us that could help you.
                                </p>
                              </div>
                            </div>
                          </NavigationMenuLink>
                          <NavigationMenuLink
                            href="https://docs.triton.one/"
                          >
                            <div className="group text-triton-trey text-[14px] inline-flex items-start justify-start gap-3 hover:bg-triton-trey/5 rounded-[14px] p-[8px] active:scale-[.99] active:bg-triton-trey/10 mb-2  border border-transparent hover:border-triton-trey/5 transition-all duration-150 ease-in-out">
                              <div className="bg-white border border-triton-trey/10 shadow-md shadow-black/10 flex justify-center items-center rounded-xl p-2">
                                <IconBooksVerticalFill className="w-[20px] h-[20px] fill-triton-trey/70 group-hover:fill-triton-trey transition-all duration-150 ease-in-out " />
                              </div>
                              <div className="">
                                <p className="font-bold">
                                  Explore the docs
                                </p>
                                <p className="text-triton-trey/50 group-hover:text-triton-trey/80 transition-all duration-150 ease-in-out">
                                  Get started and learn about Triton on a deaper level.
                                </p>
                              </div>
                            </div>
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                        <NavigationMenuContent
                          className="p-[20px]">
                          <h3 className="text-sm font-bold uppercase tracking-wide text-triton-trey opacity-50 mb-4">
                            Company
                          </h3>
                          <NavigationMenuLink
                            href="/about">
                            <div className="group text-triton-trey text-[14px] inline-flex items-start justify-start gap-3 hover:bg-triton-trey/5 rounded-[14px] p-[8px] active:scale-[.99] active:bg-triton-trey/10 mb-2  border border-transparent hover:border-triton-trey/5 transition-all duration-150 ease-in-out">
                              <div className="bg-white border border-triton-trey/10 shadow-md shadow-black/10 flex justify-center items-center rounded-xl p-2">
                                <IconPersonCropCircleDashed className="w-[20px] h-[20px] fill-triton-trey/70 group-hover:fill-triton-trey transition-all duration-150 ease-in-out " />
                              </div>
                              <div className="">
                                <p className="font-bold">
                                  About
                                </p>
                                <p className="text-triton-trey/50 group-hover:text-triton-trey/80 transition-all duration-150 ease-in-out">
                                  We&apos;re life long builders looking to add value to Web3, and Defi.
                                </p>
                              </div>
                            </div>
                          </NavigationMenuLink>
                          <h3 className="text-sm font-bold uppercase tracking-wide text-triton-trey opacity-50 mb-4">
                            Social
                          </h3>
                          <NavigationMenuLink
                            className=""
                            href="https://twitter.com/triton_one"
                          >
                            <div className="group text-triton-trey text-[14px] inline-flex items-start justify-start gap-3 hover:bg-triton-trey/5 rounded-[14px] p-[8px] active:scale-[.99] active:bg-triton-trey/10 mb-2  border border-transparent hover:border-triton-trey/5 transition-all duration-150 ease-in-out">
                              <div className="bg-white border border-triton-trey/10 shadow-md shadow-black/10 flex justify-center items-center rounded-xl p-2">
                                <IconXLogo className="w-[20px] h-[20px] fill-triton-trey/70 group-hover:fill-triton-trey transition-all duration-150 ease-in-out " />
                              </div>
                              <div className="">
                                <p className="font-bold">
                                  Twitter
                                </p>
                                <p className="text-triton-trey/50 group-hover:text-triton-trey/80 transition-all duration-150 ease-in-out">
                                  Keep up with Triton on twitter, give us a chirp and say hi!
                                </p>
                              </div>
                            </div>
                          </NavigationMenuLink>
                          <h3 className="text-sm font-bold uppercase tracking-wide text-triton-trey opacity-50 mb-4">
                            Branding
                          </h3>
                          <NavigationMenuLink
                            className=""
                            href="/assets/images/Triton_LogoPack.zip"
                            download
                          >
                            <div className="group text-triton-trey text-[14px] inline-flex items-start justify-start gap-3 hover:bg-triton-trey/5 rounded-[14px] p-[8px] active:scale-[.99] active:bg-triton-trey/10 mb-2  border border-transparent hover:border-triton-trey/5 transition-all duration-150 ease-in-out">
                              <div className="bg-white border border-triton-trey/10 shadow-md shadow-black/10 flex justify-center items-center rounded-xl p-2">
                                <IconTrayAndArrowDownFill className="w-[20px] h-[20px] fill-triton-trey/70 group-hover:fill-triton-trey transition-all duration-150 ease-in-out " />
                              </div>
                              <div className="">
                                <p className="font-bold">
                                  Press Kit
                                </p>
                                <p className="text-triton-trey/50 group-hover:text-triton-trey/80 transition-all duration-150 ease-in-out">
                                  Logos, logos, logos, all you need in one zip file.
                                </p>
                              </div>
                            </div>
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>

                  <div className="inline-flex justify-center items-center gap-4">
                    <div className="">
                      <Button
                        onClick={() => window.open("https://forms.gle/rT6nPbUE4toyPfbb7", "_blank")}
                        variant="outline"
                        className="mt-1 p-2 px-4 text-sm rounded-[15px] bg-white/10 hover:bg-triton-trey/5 border border-black/20 hover:border-black/30 text-black/60 hover:text-black"
                      >
                        Sign In
                      </Button>
                    </div>
                    <div className={`${isScrolled ? 'cta-btn-visible' : 'cta-btn-hidden'}`}>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://forms.gle/rT6nPbUE4toyPfbb7"
                      >
                        <ButtonSkeu>
                          Request Access
                        </ButtonSkeu>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div >
      </AnimatePresence >

    </>
  );
};

export default Navvy;
