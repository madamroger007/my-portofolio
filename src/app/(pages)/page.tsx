import LayoutComponent from "../../components/layout/layout";
import { Metadata } from "next";
import BgHeroSection from "./_section/BgHeroSection";

export const metadata: Metadata = {
  title: "Home"
}

export default async function Home() {
  return (
    <LayoutComponent>
      <section className="grid w-full py-10">
        <BgHeroSection />
      </section>

    </LayoutComponent>
  );
}
