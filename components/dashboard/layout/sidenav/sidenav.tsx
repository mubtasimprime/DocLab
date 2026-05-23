import Image from "next/image";
import pageicon from "@/public/pageicon.png";
import supportlogo from "@/public/supportlogo.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { PiArrowsDownUp } from "react-icons/pi";
import Menus from "./menus";

export default function Sidenav(){
    return(
        <>
        <section className="border border-neutral/10">
            <div className="flex justify-between items-center h-[52px] border-b-neutral/10 border-b sticky top-0 py-3 px-6">
                <div className="flex flex-wrap gap-[6px]">
                    <Image src={pageicon} alt="pageIcon"/>

                    <h3>
                        DocLab
                    </h3>
                </div>

                <div>
                    <button className="size-[22px] rounded-full bg-accent/15 flex justify-center items-center transition-all duration-200 ease-linear hover:bg-accent/80">
                        <GoArrowLeft />
                    </button>
                </div>
            </div>

            <div className="sticky top-[52px] h-screen w-full py-3 px-6 space-y-4">            
            <div className="flex flex-wrap gap-2 items-center mt-6 border border-neutral/10 py-3 px-4 rounded-xl">
                <div>
                    <Image src={supportlogo} alt="logo" />
                </div>

                <div>
                    <h4>
                        Trustcare Clinic
                    </h4>
                    <p className="text-neutral/50">
                        Lasvegas
                    </p>
                </div>

                <div className="ml-auto">
                    <PiArrowsDownUp />
                </div>
            </div>

            <div className="space-y-3">
                <Menus/>
            </div>
            </div>
        </section>
        </>
    )
}