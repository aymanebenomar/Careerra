import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];
  
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <motion.div
        className="min-h-screen pb-20 pt-14 relative overflow-hidden"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* === Background Design === */}
        <div className="absolute inset-0 overflow-hidden -z-20">
          <motion.div
            className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                                linear-gradient(to bottom, #000 1px, transparent 1px)`,
              backgroundSize: "4rem 4rem",
              backgroundPosition: "center center",
            }}
          />
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          {...fadeIn}
        >
          <a href="/" className="text-white">
            Home
          </a>
          <a href="/products" className="text-white">
            Products
          </a>
          <a href="/stories" className="text-white">
            Stories
          </a>
          <a href="/pricing" className="text-white">
            Pricing
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md flex"
          >
            X
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black"
          {...fadeIn}
        >
          <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-indigo-300 blur-[100px] opacity-30"></div>

          {/* Avatars + Stars */}
          <div className="flex items-center mt-24">
            <div className="flex -space-x-3 pr-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]"
              />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="user1"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="user2"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]"
              />
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="user5"
                className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[5]"
              />
            </div>

            <div>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#3902FF" 
                      stroke="#3902FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>
              <p className="text-sm text-gray-700">Used by 1.5k + users</p>
            </div>
          </div>

          {/* Headline + CTA */}
          <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
            Craft your perfect resume using{" "}
            <span style={{ color: "#3902FF" }}>Careerra</span> in minutes.
          </h1>
          <p className="max-w-md text-center text-base my-7">
            Build a standout resume effortlessly with Careerra AI, and focus on what really matters | your career growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/app"
              className="bg-[#3902FF] hover:bg-indigo-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-indigo-400 flex items-center transition-colors"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-1 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>

            <button className="flex items-center gap-2 border border-slate-400 hover:bg-indigo-50 transition rounded-full px-7 h-12 text-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-video size-5"
                aria-hidden="true"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                <rect x="2" y="6" width="14" height="12" rx="2"></rect>
              </svg>
              <span>Try demo</span>
            </button>
          </div>

          <p className="py-6 text-slate-600 mt-14">
            Trusting by leading brands, including
          </p>

          {/* Brand Logos Seamless Scroll with Fade */}
          <div className="relative w-[50%] max-w-2xl mx-auto py-4 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-12 pointer-events-none">
              <div className="h-full w-full bg-gradient-to-r from-white to-transparent opacity-50"></div>
            </div>
            <div className="absolute right-0 top-0 h-full w-12 pointer-events-none">
              <div className="h-full w-full bg-gradient-to-l from-white to-transparent opacity-50"></div>
            </div>

            <div className="flex whitespace-nowrap animate-scroll-seamless gap-6">
              {logos.concat(logos).map((logo, index) => (
                <img key={index} src={logo} alt="logo" className="h-6 w-auto inline-block" />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

          * { font-family: 'Poppins', sans-serif; }

          @keyframes scroll-seamless {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll-seamless { display: flex; animation: scroll-seamless 25s linear infinite; }
        `}
      </style>
    </>
  );
};

export default Hero;
