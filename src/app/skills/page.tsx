import { MenuBar } from "@/src/components/menuBar";
import PageLayout from "@/src/components/pages/PageLayout";
import SkillsCards from "./components/SkillsCard";
import GetInTouch from "@/src/components/layout/GetInTouch";
import { skillsData } from "@/src/data/skills";

export default function SkillsPage() {
  const programmingLanguages = skillsData[0];
  const frontend = skillsData[1];
  const styling = skillsData[2];
  const backend = skillsData[3];
  const database = skillsData[4];
  const uiux = skillsData[5];

  const computerScience = skillsData[6] || frontend;
  const personal = skillsData[7] || backend;
  const animations = skillsData[8] || styling;
  const cloud = skillsData[9] || backend;
  const testing = skillsData[10] || database;
  const mobile = skillsData[11] || frontend;
  const versionControl = skillsData[12] || uiux;

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
                {frontend && <SkillsCards {...frontend} />}
                {backend && <SkillsCards {...backend} />}
                {computerScience && <SkillsCards {...computerScience} />}
                {personal && <SkillsCards {...personal} />}
              </div>

              <div className="flex flex-col gap-4">
                {styling && <SkillsCards {...styling} />}
                {animations && <SkillsCards {...animations} />}
                {cloud && <SkillsCards {...cloud} />}
                {testing && <SkillsCards {...testing} />}
              </div>

              <div className="flex flex-col gap-4">
                {programmingLanguages && (
                  <SkillsCards {...programmingLanguages} />
                )}
                {database && <SkillsCards {...database} />}

                <div className="grid grid-cols-2 gap-4">
                  {mobile && <SkillsCards {...mobile} />}
                  {versionControl && <SkillsCards {...versionControl} />}
                </div>

                {uiux && <SkillsCards {...uiux} />}
              </div>
            </div>
          </div>
        </section>

        <GetInTouch />
      </main>
    </PageLayout>
  );
}
