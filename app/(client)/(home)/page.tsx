import HeroBanner from "@/components/client/home/HeroBanner";
import InfoCards from "@/components/client/home/InfoCards";
import HomeService from "@/components/client/home/HomeService";
import CountUp from "@/components/client/home/CountUp";
import PatientCare from "@/components/client/home/PatientCare";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <InfoCards></InfoCards>
      <HomeService></HomeService>
      <CountUp></CountUp>
      <PatientCare></PatientCare>
    </>
  );
};

export default Home;
