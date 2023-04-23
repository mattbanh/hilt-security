import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div
        className="relative mb-[28vh] flex place-items-center 
        before:absolute before:h-[200px] before:w-[240px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] 
        after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-[#EDBB5F] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#EDBB5F] after:dark:opacity-40 before:lg:h-[360px]"
      >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#EDBB5F] dark:invert"
          src="/hilt-security-logo.svg"
          alt="Next.js Logo"
          width={200}
          height={37}
          priority
        />
      </div>
      <div>
        <p className="font-semibold font-[Poppins] text-7xl text-[#333333]">
          Coming Soon
        </p>
      </div>
    </main>
  );
}
