import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { IconAppleLogo } from 'symbols-react';

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 py-24 space-y-12">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center text-center">
          <Image
            src="/img/senko-main.png"
            alt="Senko Icon"
            width={80}
            height={80}
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[16px] shadow-md shadow-black/40 mb-4"
          />
          <h1 className="text-6xl font-normal italic mb-4 font-serif">Easily capture the vibe.</h1>
          <p className="text-lg mb-6 text-black/60">
          <span className="text-black font-bold"> See it? shoot it. </span> Senko is designed to capture effortlessly, outputting professional photos with the simplicity and elegance of a traditional point-and-shoot experience.
          </p>
          <div className="space-x-4">
            <Button 
              className="flex items-center justify-center flex-row shadow-md shadow-black/40"
            >
              <IconAppleLogo className="mr-2 fill-white" /><span className="text-white">Download from App Store</span>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/img/iphone-mock.svg"
            alt="iPhone Mock"
            width={400}
            height={800}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;