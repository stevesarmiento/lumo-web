import Image from "next/image";
import ScrambleText from "@/components/ScrambleText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-row items-center justify-center gap-x-2">
          <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[16px] shadow-lg shadow-black/70"
              src="/img/lumo-light.png"
              alt="Next.js Logo"
              width={70}
              height={37}
              priority
            />
          <p className="font-medium text-4xl text-white/90">
            <ScrambleText title="Shot with lumo" animationDelay={100} paused={false} once={true} />
          </p>          
        </div>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">

        </div>
      </div>
{/* 
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-[40px]"
          src="/img/lumo-letter-dark.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

      </div> */}
    </main>
  );
}
