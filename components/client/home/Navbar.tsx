import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.png";
import { ChevronDown } from "lucide-react";

const dropdownLinks = {
  Department: [{ label: "Departments", href: "/department" }],
  Doctors: [{ label: "Doctors", href: "/doctors" }],
  Blog: [{ label: "Blog", href: "/blog" }],
};

const Navbar = () => {
  return (
    <>
      <section className="h-25 py-4">
        <Container>
          <section className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href={"/"}>
                <Image className="h-23 w-23" src={Logo} alt="Logo" />
              </Link>
              <div className="text-4xl font-bold font-exo">DocLab</div>
            </div>

            <div className="flex gap-10 font-medium font-exo">
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/service"}>Service</Link>

              {Object.entries(dropdownLinks).map(([label, items]) => (
                <div key={label} className="relative group">
                  {/* Trigger */}
                  <button className="flex items-center gap-1 cursor-pointer">
                    {label}
                    <ChevronDown className="w-5 h-5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Invisible gap */}
                  <div className="absolute left-0 top-full h-3 w-full" />

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full mt-3 w-48 bg-white shadow-lg opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50 border-t-5 border-secondary">
                    {items.map((item, i) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-3 text-gray-700 hover:text-red-500 ${
                          i !== items.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <Link href={"/contact"}>Contact</Link>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
};

export default Navbar;
