import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#050505] min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-6 py-2 border border-gray-700 rounded-full mb-8 backdrop-blur-sm bg-white/5">
              <span className="text-gray-300 text-xs font-bold uppercase tracking-wider">
                ĐẠI LÝ KIA CHÍNH HÃNG
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tighter uppercase mb-6">
              <span className="text-white block mb-2">TRẢI NGHIỆM</span>
              <span className="text-kia-red block">XỨNG TẦM</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-400 text-lg font-normal leading-relaxed max-w-lg mb-10">
              Sở hữu ngay các dòng xe KIA thời thượng với ưu đãi độc quyền và dịch vụ chăm sóc khách hàng 5 sao.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-kia-red text-white font-bold text-base px-10 py-4 rounded-full shadow-[0_0_30px_-5px_rgba(187,22,43,0.5)] hover:bg-red-700 hover:scale-105 transition-all duration-300 uppercase tracking-wide">
                NHẬN BÁO GIÁ
              </button>
              <a 
                href="#products"
                className="bg-transparent border border-gray-600 text-white font-bold text-base px-10 py-4 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 uppercase tracking-wide"
              >
                XEM DÒNG XE
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
             {/* Decorative blurred glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-kia-red/10 blur-[100px] rounded-full -z-10"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop" 
                alt="KIA Luxury Experience" 
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;