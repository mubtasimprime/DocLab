import { AiFillMessage } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import Container from "@/components/ui/Container";

const TopNav = () => {
  return (
    <>
      <section className="h-12.5 bg-primary text-white">
        <Container>
          <div className="flex justify-between items-center h-full">
            <div className="flex gap-6 font-roboto">
              <div className="flex items-center gap-1.5">
                <AiFillMessage className="outline-0" size={16} />
                <span className="text-sm">support@doclab.com</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MdLocationPin className="outline-0" size={16} />
                <span className="text-sm">
                  Address 13/3/B-2, Mirpur, Dhaka-1216
                </span>
              </div>
            </div>
            <div className="text-sm font-roboto">
              Call Now:{" "}
              <span className="font-exo text-xl font-semibold">
                +880 1989133132, +880 1866-665158
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TopNav;
