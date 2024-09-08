import HeroBackgroundVideo from "../components/ui/HeroBackgroundVideo";
import HeroHeading from "../components/ui/HeroHeading";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center bg-dark" id="home">
        <HeroBackgroundVideo />
        <HeroHeading />
      </div>
    </>
  );
};

export default Hero;
