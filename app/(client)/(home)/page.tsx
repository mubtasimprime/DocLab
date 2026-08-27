import HeroBanner from "@/components/client/home/HeroBanner";
import InfoCards from "@/components/client/home/InfoCards";
import HomeService from "@/components/client/home/HomeService";
import CountUp from "@/components/client/home/CountUp";
import PatientCare from "@/components/client/home/PatientCare";
import Testimonials from "@/components/client/home/Testimonials";
import Partners from "@/components/client/home/Partners";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <InfoCards></InfoCards>
      <HomeService></HomeService>
      <CountUp></CountUp>
      <PatientCare></PatientCare>
      <Testimonials></Testimonials>
      <Partners></Partners>
    </>
  );
};

export default Home;
