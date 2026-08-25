import Image from "next/image";
import Link from "next/link";
import { Clock, Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "public/logo.png";

// TODO: dummy links — replace with real routes later.
const departmentLinks = [
  { label: "Laboratory Services", href: "#" },
  { label: "Heart Disease", href: "#" },
  { label: "Dental Care", href: "#" },
  { label: "Body Surgery", href: "#" },
  { label: "Neurology Surgery", href: "#" },
];

const supportLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Company Support", href: "#" },
  { label: "FAQuestions", href: "#" },
  { label: "Company Licence", href: "#" },
];

const socialLinks = [
  { icon: <FaFacebookF className="h-4 w-4" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="h-4 w-4" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedinIn className="h-4 w-4" />, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-[#f4f9fc]">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <Image className="h-16 w-16" src={Logo} alt="DocLab Logo" />
              <span className="font-exo text-2xl font-bold text-primary">
                DocLab
              </span>
            </Link>

            <p className="mt-5 font-roboto text-sm leading-relaxed text-primary/60">
              Connecting doctors and patients with the resources, knowledge,
              and care they need for better health outcomes.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-secondary hover:text-white"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Department */}
          <div>
            <h3 className="font-exo text-lg font-bold text-primary">
              Department
            </h3>
            <div className="mt-3 h-1 w-10 rounded-full bg-secondary" />

            <ul className="mt-6 space-y-3">
              {departmentLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-roboto text-sm text-primary/60 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-exo text-lg font-bold text-primary">
              Support
            </h3>
            <div className="mt-3 h-1 w-10 rounded-full bg-secondary" />

            <ul className="mt-6 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-roboto text-sm text-primary/60 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-exo text-lg font-bold text-primary">
              Get In Touch
            </h3>
            <div className="mt-3 h-1 w-10 rounded-full bg-secondary" />

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-roboto text-sm text-primary/60">
                    Support Available for 24/7
                  </p>
                  <p className="font-exo text-base font-bold text-primary">
                    support@doclab.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-roboto text-sm text-primary/60">
                    Mon to Fri : 08:30 - 18:00
                  </p>
                  <p className="font-exo text-base font-bold text-primary">
                    +23-456-6588
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-primary/10" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <p className="font-roboto text-sm text-primary/60">
            © Copyright Reserved to{" "}
            <span className="font-bold text-primary">DocLab</span>
          </p>

          <form className="flex w-full max-w-md items-center rounded-full bg-white p-1.5 shadow-sm sm:w-auto">
            <input
              type="email"
              required
              placeholder="Your Email address"
              className="w-full min-w-0 bg-transparent px-4 py-2 font-roboto text-sm text-primary placeholder:text-primary/40 focus:outline-none sm:w-64"
            />
            <Button type="submit" variant="secondary" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
