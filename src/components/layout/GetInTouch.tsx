import Link from "next/link";

interface GetInTouchProps {
  variant?: "light" | "dark";
}

export default function GetInTouch({ variant = "light" }: GetInTouchProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`w-full py-24 px-8 md:px-16 lg:px-24 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-sm text-neutral-500">
            That's all for now.
          </span>
          <h2
            className={`text-[77px] md:text-7xl font-normal ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Got a project in mind?
          </h2>
          <h2
            className={`text-5xl md:text-7xl font-normal ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Let's talk
          </h2>
        </div>

        <div className="relative w-full flex items-center justify-end my-10">
          <div
            className={`w-full h-[1px] ${isDark ? "bg-white" : "bg-[#000000]"}`}
          />
          <Link
            href="mailto:marioestima21@gmail.com"
            className="absolute right-[10%] md:right-[15%] top-1/2 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#455CE9] text-white font-thin text-base md:text-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg z-20"
          >
            Get in touch
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 pt-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400 font-light">Email:</span>
            <a href="mailto:marioestima21@gmail.com" className={`text-base md:text-[24px] font-thin hover:opacity-70 transition-opacity ${isDark ? "text-white" : "text-black"}`}>
              marioestima21@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400 font-light">Phone</span>
            <a href="tel:+918248669086" className={`text-base md:text-[24px] font-thin hover:opacity-70 transition-opacity ${isDark ? "text-white" : "text-black"}`}>
              (+244) 974863664
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}