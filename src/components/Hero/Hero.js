import HeroSection from "./HeroSection";

function Hero() {
  return (
    <div>
      <HeroSection
        text={
          "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
        }
        title={"Create an invite-only place where you belong"}
      />
    </div>
  );
}

export default Hero;
