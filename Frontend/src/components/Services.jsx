import React from 'react';

const Services = ({servicesData}) => {
  return (
    <section className="md:h-[100%] py-16 md:py-[6rem] bg-gray-50 text-center">
        <div className='flex flex-col justify-center items-center'>

      <h2 className="text-dark-blue text-3xl md:text-4xl font-bold mb-8">Our Comprehensive Care Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {servicesData.map((service) => (
          <div key={service.id} className="rounded-xl shadow-2xl p-4">
            <img src={`${service.icon}?${new Date().getTime()}`} alt={service.title} className={`w-[${servicesData.w}px] mx-auto`} />
            <h3 className="text-dark-blue text-2xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
