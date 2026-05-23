import { FaRegBell, FaRegUser } from "react-icons/fa";
import { IoCalendarNumberOutline, IoSearchOutline } from "react-icons/io5";
import { LuCommand } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import Bubble from "@/public/dashboard/bubble.png";
import Image from "next/image";

export default function Topnav(){
    return(
        <>
        <section>
            <div className="sticky top-0 w-full h-[53px] border-b border-neutral/10 flex justify-between px-6 py-2.5">
            <div className="w-[250px] h-8 relative">
                <span className="absolute top-1/2 -translate-y-1/2 left-[13.75px] text-neutral/50">
                    <IoSearchOutline />
                </span>

                <div className="absolute size-full">
                    <input type="text" className="size-full border border-neutral/10 rounded-lg px-8 focus:outline-0" placeholder="search"/>
                </div>

                <span className="absolute top-1/2 -translate-y-1/2 right-[13.75px] rounded-xl">
                    <LuCommand />
                </span>
            </div>

            <div className="flex flex-wrap gap-4">
                <button className="py-[6px] px-2.5 rounded-xl bg-accent flex flex-wrap font-exo text-white">
                    Ai Assitance
                </button>

                <button className="size-8 rounded-full flex justify-center items-center border border-neutral/10 transition-all duration-200 ease-linear hover:bg-accent hover:border-0 hover:text-white text-lg">
                    <IoCalendarNumberOutline />
                </button>

                <button className="size-8 rounded-full flex justify-center items-center border border-neutral/10 transition-all duration-200 ease-linear hover:bg-accent hover:border-0 hover:text-white text-lg">
                    <MdOutlineSettings />
                </button>

                <button className="size-8 rounded-full flex justify-center items-center border border-neutral/10 transition-all duration-200 ease-linear hover:bg-accent hover:border-0 hover:text-white text-lg">
                    <FaRegBell />
                </button>

                <button className="size-8 rounded-full flex justify-center items-center border border-neutral/10 transition-all duration-200 ease-linear hover:bg-accent hover:border-0 hover:text-white text-lg">
                    <FaRegUser />
                </button>
            </div>
            </div>
        </section>
        </>
    )
}