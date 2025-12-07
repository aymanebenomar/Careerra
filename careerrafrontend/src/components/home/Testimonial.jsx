import React from 'react';
import customPic1 from '../../assets/z.jpeg';
import customPic2 from '../../assets/me.jpeg';
import customPic3 from '../../assets/z.jpeg';
import customPic4 from '../../assets/z.jpeg';
import customPic5 from '../../assets/z.jpeg';
import customPic6 from '../../assets/z.jpeg';

const Testimonial = () => {
  const cardsData = [
    { image: customPic1, name: 'Zakaria Alliouate', handle: '@alliouate_zaka', date: 'November 03, 2025', comment: 'This AI résumé tool gave me precise guidance that made my CV truly stand out!' },
    { image: customPic2, name: 'Aymane Benomar', handle: '@aymanebenomar', date: 'October 17, 2025', comment: 'Creating multiple CV versions and tracking improvements has never been this easy.' },
    { image: customPic3, name: 'Youssef El Amrani', handle: '@youssef_elamrani', date: 'November 15, 2025', comment: 'Thanks to this AI résumé tool, I created a standout CV that helped me land interviews faster than ever!' },
    { image: customPic4, name: 'Fatima Zahra', handle: '@fzahra', date: 'October 10, 2025', comment: 'The suggestions and templates are incredibly useful. It feels like having a professional career advisor at my fingertips.' },
    { image: customPic5, name: 'Liam O’Connor', handle: '@liamoc', date: 'September 22, 2025', comment: 'I love how easy it is to manage multiple résumé versions and see AI feedback instantly.' },
    { image: customPic6, name: 'Amina Benali', handle: '@amina_b', date: 'November 5, 2025', comment: 'Creating a professional-looking CV has never been this smooth. Highly recommend it!' }
  ];

  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
      <div className="flex gap-2 items-center">
        <img className="h-11 w-11 rounded-full" src={card.image} alt={card.name} />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-semibold text-gray-800">{card.name}</p>
            <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
            </svg>
          </div>
          <span className="text-xs text-slate-500">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-800">{card.comment}</p>
      <div className="flex items-center justify-between text-slate-500 text-xs">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
          <a href="https://x.com" target="_blank" className="hover:text-sky-500">
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
            </svg>
          </a>
        </div>
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <section id='testimonials' className='flex flex-col items-center py-20 px-4 scroll-mt-12'>
      <div className="max-w-6xl w-full text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          What Our Users Say
        </h2>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Hear from professionals across Morocco and around the world who transformed their career journey with our AI résumé tool.
        </p>
      </div>

      {/* First Row */}
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative mb-10">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="flex animate-marquee min-w-[200%] pt-10 pb-5">
          {[...cardsData.slice(0, 3), ...cardsData.slice(0, 3)].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>

      {/* Second Row */}
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative mb-10">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="flex animate-marquee-reverse min-w-[200%] pt-10 pb-5">
          {[...cardsData.slice(3), ...cardsData.slice(3)].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          display: flex;
          gap: 1rem;
          min-width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          gap: 1rem;
          min-width: max-content;
          animation: marqueeReverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
