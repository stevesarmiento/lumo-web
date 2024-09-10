import LeftSideContent from "@/components/LeftSideContent";
import RightSideContent from "@/components/RightSideContent";

import Navvy from "@/components/Navvy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black/20 overflow-hidden">
      <Navvy />
      <div className="relative z-[-1] flex w-full mx-auto">
         <LeftSideContent />

        <RightSideContent /> 
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

      </div>
    </main>
  );
}
