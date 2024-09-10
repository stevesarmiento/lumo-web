import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const LeftSideContent: React.FC = () => {
  return (
    <div className="w-1/2 h-auto space-y-12">
      <section className="h-screen flex flex-col justify-center items-start w-[520px] mx-auto">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[16px] shadow-md shadow-black/40 mb-4"
          src="/img/mainbutton.svg"
          alt="Senko Icon"
          width={80}
          height={37}
          priority
        />
        <h2 className="text-7xl font-bold mb-4">Easily capture the vibe.</h2>
        <p className="text-lg mb-6 text-black/60">
         <span className="text-black font-bold">See it, shoot it, share it.</span> Senko is designed to capture effortlessly good professional photos with the simplicity and elegance of a traditional point-and-shoot camera.
        </p>
        <Button className="rounded-full">
          <Link href="/">
            Join the Beta
          </Link>
        </Button>
      </section>

      <section className="h-screen flex flex-col justify-center items-start w-[520px] mx-auto">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[12px] shadow-lg shadow-black/40 mb-4"
          src="/img/senko-filters.png"
          alt="Senko Icon"
          width={50}
          height={37}
          priority
        />
        <h3 className="text-3xl font-semibold mb-3">Live Color-grading</h3>
        <p className="text-lg text-black/60">
          We&apos;ve created custom color-grading for live filters that get applied to photos if you want a vintage vibe. If you can see it, and you can shoot it, you&apos;re going to love it. 
        </p>
      </section>

      <section className="h-screen flex flex-col justify-center items-start w-[520px] mx-auto">
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[12px] shadow-lg shadow-black/40 mb-4"
          src="/img/senko-filters.png"
          alt="Senko Icon"
          width={50}
          height={37}
          priority
        />
        <h3 className="text-3xl font-semibold mb-3">Dead Simple User Experience</h3>
        <p className="text-lg text-black/60">
          Slide up and down to adjust exposure, slide left and right to adjust noise, tap on screen to activate focus point.
        </p>
      </section>

      <section className="h-screen flex flex-col justify-center items-start w-[520px] mx-auto">
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[12px] shadow-lg shadow-black/40 mb-4"
          src="/img/senko-filters.png"
          alt="Senko Icon"
          width={50}
          height={37}
          priority
        />
        <h3 className="text-3xl font-semibold mb-3">Your Memories, Your Way</h3>
        <p className="text-lg text-black/60">
          Senko adapts to your style. Whether you&apos;re a casual shooter or a photography enthusiast, our app provides the tools you need to express your unique vision.
        </p>
      </section>
    </div>
  );
};

export default LeftSideContent;
