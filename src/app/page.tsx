import About from "../components/layout/About";
import GetInTouch from "../components/layout/GetInTouch";
import ContactInfo from "../components/layout/ContactInfo";
import WorkPreview from "../components/layout/WorkPreview";
import Hero from "../components/layout/Hero";
import PageLayout from "../components/pages/PageLayout";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <PageLayout theme="light">
      <main className="relative">
        <Header />

        <Hero />

        <div className="relative z-10 bg-white">
          <About />

          <WorkPreview />

          <GetInTouch />
        </div>
      </main>
    </PageLayout>
  );
}