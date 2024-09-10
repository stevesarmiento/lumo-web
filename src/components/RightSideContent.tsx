import React from 'react';
import Image from 'next/image';

const RightSideContent: React.FC = () => {
  return (
    <div className="w-1/2 h-screen flex flex-col justify-center items-center">
      <div className="relative translate-y-[400px] rotate-[10deg]">
        <Image
          src="/img/iphone-mock.svg"
          alt="iPhone Mock"
          width={850}
          height={600}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl font-bold text-white">Placeholder Content</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideContent;