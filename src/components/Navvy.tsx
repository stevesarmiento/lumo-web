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
import { IconAppleLogo } from 'symbols-react';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';



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
      width: "50%",
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
                  <div className="flex items-center flex-row space-x-4">
                      <Image
                        src={"/img/senko-main.png"}
                        alt="Triton Logo"
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[12px] shadow-lg shadow-black/40"
                        width={50}
                        height={50}
                      />
                      <h1 className="text-4xl font-normal italic font-serif border-l-2 border-black/20 pl-4">{isScrolled ? "Easily capture the vibe." : "Senko"}</h1>
                  </div>

                    <div className={`${isScrolled ? 'cta-btn-visible' : 'cta-btn-hidden'}`}>
                        <Button 
                          className="flex items-center justify-center flex-row shadow-md shadow-black/40"
                        >
                          <IconAppleLogo className="mr-2 fill-white" /><span className="text-white">Download from App Store</span>
                        </Button>
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
