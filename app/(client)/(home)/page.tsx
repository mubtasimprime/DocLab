import HeroBanner from "@/components/client/home/HeroBanner";
import InfoCards from "@/components/client/home/InfoCards";
import HomeService from "@/components/client/home/HomeService";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <InfoCards></InfoCards>
      <HomeService></HomeService>
    </>
  );
};

export default Home;
