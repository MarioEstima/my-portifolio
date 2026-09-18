import { MenuBar } from "@/src/components/menuBar";
import PageLayout from "@/src/components/pages/PageLayout";
import SkillsCards from "./components/SkillsCard";
import GetInTouch from "@/src/components/layout/GetInTouch";
import { skillsData } from "@/src/data/skills";

export default function SkillsPage() {
  const frontendWeb = skillsData[0];
  const frontendMobile = skillsData[1];
  const backend = skillsData[2];
  const database = skillsData[3];
  const devTools = skillsData[4];
  const services = skillsData[5];

  return (
    <PageLayout theme="dark">
      <main className="w-full bg-black">
        <section className="w-full py-20 flex justify-center px-4">
          <div className="w-[1212px] text-center">
            <h1 className="text-white text-[140px] font-normal whitespace-nowrap">
              Skills that fuel my <br />
              passion
            </h1>

            <div className="mt-20 relative z-30">
              <MenuBar />
            </div>
          </div>
        </section>

        <section className="w-full bg-black text-white px-6 md:px-12 lg:px-20 py-24">
          <div className="max-w-[1400px] mx-auto">
            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-[1.15fr_0.9fr_1.15fr]
                gap-4
                items-start
              "
            >
              <div className="flex flex-col gap-4">
                {frontendMobile && <SkillsCards {...frontendMobile} />}
                {backend && <SkillsCards {...backend} />}
              </div>

              <div className="flex flex-col gap-4">
                {database && <SkillsCards {...database} />}
                {devTools && <SkillsCards {...devTools} />}
              </div>

              <div className="flex flex-col gap-4">
                {frontendWeb && <SkillsCards {...frontendWeb} />}
                {services && <SkillsCards {...services} />}
              </div>
            </div>
          </div>
        </section>

        <GetInTouch  variant="dark"/>
      </main>
    </PageLayout>
  );
}