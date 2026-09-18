import Image from "next/image";
import { MenuBar } from "../menuBar";

export default function Hero() {
  return (
    <section className="sticky top-0 w-full h-screen bg-[#7E7E7E] text-[#FFFFFF] overflow-hidden flex flex-col justify-between pt-10 z-0">
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0">
        <div className="relative flex items-end justify-center max-w-[1400px] w-full h-full">
          <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
            <Image
              src="/images/me.png"
              alt="Profile"
              width={800}
              height={1000}
              className="object-contain object-bottom h-[55vh] md:h-[90vh] w-auto grayscale drop-shadow-2xl"
              priority
              unoptimized
            />
          </div>

          <div className="pointer-events-auto absolute right-[15%] top-[32%] z-10 flex items-center justify-center">
            <Image
              src="/images/arrow_up.png"
              alt="Arrow"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex-1" />

      <div className="w-full flex flex-col items-center z-20 pb-4">
        <div className="w-full whitespace-nowrap overflow-hidden flex justify-center px-4">
          <h1 className="text-[7.5vw] md:text-[225px] font-medium leading-none tracking-tight text-[#FFFFFF] select-none text-center">
            Software Engineer
          </h1>
        </div>

        <div className="mt-4 relative z-30">
          <MenuBar />
        </div>
      </div>
    </section>
  );
}