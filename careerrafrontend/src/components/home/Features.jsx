import React from 'react';
import { Sparkles, Users, FileCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI Resume Analyzer",
      description: "Leverage cutting-edge AI to transform your résumé with precision-tuned recommendations that enhance readability, ATS compatibility, and professional impact.",
      color: "primary"
    },
    {
      icon: Users,
      title: "User Profile Insights",
      description: "Seamlessly organize multiple résumé versions, monitor revisions in real-time, and unlock personalized AI-driven insights tailored to your career trajectory.",
      color: "secondary"
    },
    {
      icon: FileCheck,
      title: "Smart Templates",
      description: "Choose from an expertly curated library of industry-leading templates, each optimized for modern recruiters and designed to showcase your unique strengths.",
      color: "accent"
    }
  ];

  const getColorClasses = (color) => {
    switch(color) {
      case 'primary':
        return {
          icon: 'text-feature-primary',
          gradient: 'bg-gradient-primary',
          border: 'hover:border-feature-primary/30'
        };
      case 'secondary':
        return {
          icon: 'text-feature-secondary',
          gradient: 'bg-gradient-secondary',
          border: 'hover:border-feature-secondary/30'
        };
      case 'accent':
        return {
          icon: 'text-feature-accent',
          gradient: 'bg-gradient-accent',
          border: 'hover:border-feature-accent/30'
        };
      default:
        return {
          icon: 'text-primary',
          gradient: 'bg-gradient-primary',
          border: 'hover:border-primary/30'
        };
    }
  };

  return (
    <section id='features' className='flex flex-col items-center py-20 px-4 scroll-mt-12'>
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Your all-in-one toolkit to craft. refine. and perfect your résumé with AI guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className={`
                  group relative flex flex-col items-start p-8 
                  bg-card rounded-2xl border border-border 
                  transition-all duration-300 ease-smooth
                  hover:shadow-feature hover:-translate-y-1
                  ${colorClasses.border}
                `}
              >
                <div className={`
                  ${colorClasses.gradient} 
                  p-4 rounded-xl mb-6
                  transition-transform duration-300 ease-smooth
                  group-hover:scale-110
                `}>
                  <Icon className={`h-8 w-8 ${colorClasses.icon}`} strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 
                  transition-opacity duration-300
                  group-hover:opacity-100 pointer-events-none
                  ${colorClasses.gradient}
                `} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
