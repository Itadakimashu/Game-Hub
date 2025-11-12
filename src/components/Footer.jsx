import facebook from "../assets/facebook.svg";
import X from "../assets/X.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";

const Footer = () => {
  return (
    <div className="min-h-[400px] bg-[#001931] text-white">
      <div className=" grid grid-cols-1 md:grid-cols-6 py-[80px] px-[30px] gap-[20px]">
        <ul className="md:col-span-2 flex flex-col gap-[20px]">
          <li className="text-lg font-semibold">Game Hub</li>
          <li className="text-sm text-purple-100">
            Game Hub is your ultimate gaming destination, bringing together the
            best games from various genres. Discover new adventures, download
            exciting titles, and explore our curated collection of games - from
            action-packed shooters to strategic puzzles. Join our gaming
            community and find your next gaming obsession today.
          </li>
        </ul>

        <ul className="flex flex-col gap-[20px]">
          <li className="text-lg font-semibold">Company</li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            About Us
          </li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            Our Team
          </li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            Contact Us
          </li>
        </ul>

        <ul className="flex flex-col gap-[20px]">
          <li className="text-lg font-semibold">Games</li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            Browse All Games
          </li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            Popular Games
          </li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            New Releases
          </li>
        </ul>

        <ul className="flex flex-col gap-[20px]">
          <li className="text-lg font-semibold">Support</li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            Privacy Policy
          </li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            Terms & Conditions
          </li>
          <li className="text-sm text-purple-100 hover:text-white cursor-pointer transition-colors">
            Help Center
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
            <li className="text-sm text-purple-100">GameHub</li>
          </div>
          <div className="flex gap-[10px] items-center">
            <img
              src={X}
              alt="X"
              className="w-[20px] h-[20px] bg-white rounded-full px-[3px] py-[2px]"
            />
            <li className="text-sm text-purple-100">GameHub</li>
          </div>
          <div className="flex gap-[10px] items-center">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-[20px] h-[20px] bg-white rounded-full px-[3px] py-[2px]"
            />
            <li className="text-sm text-purple-100">GameHub</li>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src={mail} alt="Mail" className="" />
            <li className="text-sm text-purple-100">support@gamehub.com</li>
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
