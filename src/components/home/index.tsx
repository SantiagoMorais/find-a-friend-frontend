import { Header } from "./header";
import { Hero } from "./hero";

export const Home = () => (
  <section className="bg-primary-color text-base-color flex min-h-screen w-full flex-col items-center">
    <Header />
    <Hero />
  </section>
);
