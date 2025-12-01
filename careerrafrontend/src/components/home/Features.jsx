import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaRobot, FaUserCircle, FaFileAlt, FaUserGraduate, FaSearch, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

const Features = () => {
  const featureList = [
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "AI Resume Analyzer",
      description: "Optimize your résumé with AI recommendations for ATS and recruiter-friendly formatting.",
    },
    {
      icon: <FaUserCircle className="w-6 h-6" />,
      title: "User Profile Insights",
      description: "Track revisions, manage multiple résumé versions, and get AI-driven insights.",
    },
    {
      icon: <FaFileAlt className="w-6 h-6" />,
      title: "Smart Templates",
      description: "Choose from a curated library of templates designed for modern recruiters.",
    },
  ];

  const secondaryFeatures = [
    {
      icon: <FaUserGraduate className="w-6 h-6" />,
      title: "Job Seekers",
      description: "Craft résumés that stand out and get AI-backed tips for interviews.",
    },
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: "Recruiters",
      description: "Quickly identify top talent with AI-powered candidate insights.",
    },
    {
      icon: <FaChalkboardTeacher className="w-6 h-6" />,
      title: "Career Coaches",
      description: "Guide clients to perfect their résumés using smart AI suggestions.",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "HR Teams",
      description: "Streamline recruitment and candidate tracking efficiently.",
    },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="features"
      className="relative min-h-screen flex flex-col justify-start pt-16 scroll-mt-20"
      ref={ref}
    >
      {/* Background Shapes */}
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

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Build, refine, and perfect your résumé with AI-powered guidance tailored to help you land your dream job.
          </p>
        </div>

        {/* Horizontal Feature Boxes */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 border-y border-dashed border-slate-200 py-10">
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              className="flex-1 flex flex-col items-center text-center px-6 relative"
              variants={featureVariants}
              initial="hidden"
              animate={controls}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex-shrink-0 p-3 bg-[#3902FF]/10 rounded-lg mb-3 text-[#3902FF]">
                {feature.icon}
              </div>
              <div>
                <h5 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h5>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
              {index !== featureList.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/4 h-2/3 border-r border-dashed border-slate-300"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Secondary Features */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 border-y border-dashed border-slate-200 py-10">
          {secondaryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="flex-1 flex flex-col items-center text-center px-6 relative"
              variants={featureVariants}
              initial="hidden"
              animate={controls}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex-shrink-0 p-3 bg-[#3902FF]/10 rounded-lg mb-3 text-[#3902FF]">
                {feature.icon}
              </div>
              <div>
                <h5 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h5>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
              {index !== secondaryFeatures.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/4 h-2/3 border-r border-dashed border-slate-300"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
    </section>
  );
};

export default Features;
