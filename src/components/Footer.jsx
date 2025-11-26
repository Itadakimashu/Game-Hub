import facebook from "../assets/facebook.svg";
import X from "../assets/X.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="min-h-[400px] bg-[#001931] text-white">
      <div className=" grid grid-cols-1 md:grid-cols-5 py-[80px] px-[30px] gap-[20px]">
        <ul className="md:col-span-2 flex flex-col gap-[20px]">
          <li className="text-lg font-semibold">Game Hub</li>
          <li className="text-sm text-purple-100">
            Your ultimate destination for discovering indie games. Browse our
            curated collection, explore detailed game information, and find your
            next favorite title. Join our gaming community today.
          </li>
        </ul>

        <ul className="flex flex-col gap-[20px]">
          <li className="text-lg font-semibold">Quick Links</li>
          <Link
            to="/"
            className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors"
          >
            Home
          </Link>
          <Link
            to="/discover"
            className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors"
          >
            Discover Games
          </Link>
          <Link
            to="/services"
            className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors"
          >
            Services
          </Link>
        </ul>

        <ul className="flex flex-col gap-[20px]">
          <li className="text-lg font-semibold">Legal</li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            Privacy Policy
          </li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            Terms of Service
          </li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            Cookie Policy
          </li>
        </ul>

        <ul className="flex flex-col gap-[20px]">
          <li className="text-lg font-semibold">Connect</li>
          <div className="flex gap-[10px] items-center">
            <img
              src={facebook}
              alt="Facebook"
              className="w-[20px] h-[20px] bg-white rounded-full px-[3px] py-[2px]"
            />
            <li className="text-sm text-purple-100">@GameHub</li>
          </div>
          <div className="flex gap-[10px] items-center">
            <img
              src={X}
              alt="X"
              className="w-[20px] h-[20px] bg-white rounded-full px-[3px] py-[2px]"
            />
            <li className="text-sm text-purple-100">@GameHub</li>
          </div>
          <div className="flex gap-[10px] items-center">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-[20px] h-[20px] bg-white rounded-full px-[3px] py-[2px]"
            />
            <li className="text-sm text-purple-100">GameHub Official</li>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={mail} alt="Mail" className="" />
            <li className="text-sm text-purple-100">contact@gamehub.com</li>
          </div>
        </ul>
      </div>
      <h1 className="text-center border-t border-purple-300 text-sm py-[15px] font-semibold text-white">
        © 2025 Game Hub. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
