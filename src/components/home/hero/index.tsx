import heroImage from "@/assets/imgs/hero.webp";

export const Hero = () => (
  <section className="flex max-w-screen-2xl flex-col items-center justify-center px-4 md:flex-row md:justify-center md:px-8">
    <h2 className="text-base-size md:text-large-size lg:text-extra-large-size w-1/2 min-w-56 text-center leading-none font-bold md:flex md:w-2/5 md:text-start">
      Bring happiness to your home
    </h2>
    <figure className="md:max w-full md:flex-1">
      <img src={heroImage} alt="hero image" className="w-full" />
    </figure>
  </section>
);
