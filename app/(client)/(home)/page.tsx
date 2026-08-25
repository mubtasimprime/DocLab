import HeroBanner from "@/components/client/home/HeroBanner";
import InfoCards from "@/components/client/home/InfoCards";
import HomeService from "@/components/client/home/HomeService";
import PatientCare from "@/components/client/home/PatientCare";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <InfoCards></InfoCards>
      <HomeService></HomeService>
      <PatientCare></PatientCare>
    </>
  );
};

export default Home;
