import React from 'react';

const Hero = ({ heroapi }) => {
  return (
    <section className="relative h-[100vh] bg-gray-50 flex items-center">
      <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${heroapi.img})` }}></div>
      <div className="relative z-10 text-start max-w-3xl lg:mt-10 md:mx-8 p-8 lg:px-10">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue leading-tight">{heroapi.title1}<br></br>{heroapi.title2}</h1>
        <p className="text-md md:text-lg text-black mt-4">{heroapi.subtitle}</p>
        <button className="bg-yellow px-6 py-3 mt-6 text-lg font-bold text-dark-blue rounded-3xl hover:bg-dark-blue hover:text-yellow border:none">{heroapi.btntext}</button>
      </div>
    </section>
  );
};

export default Hero;
