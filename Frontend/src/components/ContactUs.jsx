import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-dark-blue md:text-4xl font-bold text-center mb-8">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl text-dark-blue font-semibold mb-6">Contact Us</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-blue">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  className="mt-1 bg-light-gray text-superiory-blue block w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-dark-blue focus:border-dark-blue placeholder-superiory-blue"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndoe@example.com"
                  className="mt-1 bg-light-gray text-superiory-blue block w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-dark-blue focus:border-dark-blue placeholder-superiory-blue"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="mt-1 bg-light-gray text-superiory-blue block w-full px-4 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-dark-blue focus:border-dark-blue placeholder-superiory-blue"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border-none shadow-md text-base font-medium rounded-md text-dark-blue bg-yellow hover:bg-dark-blue hover:text-yellow"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl text-dark-blue font-semibold mb-6">Our Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone text-yellow hover:text-dark-blue"></i>
                <div>
                  <p className="font-medium text-gray-900">Phone:</p>
                  <p className="text-gray-600">+123-456-7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-yellow hover:text-dark-blue"></i>
                <div>
                  <p className="font-medium text-gray-900">Email:</p>
                  <p className="text-gray-600">support@company.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-yellow hover:text-dark-blue"></i>
                <div>
                  <p className="font-medium text-gray-900">Address:</p>
                  <p className="text-gray-600">1234 Street Name, City, Country</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-globe text-yellow hover:text-dark-blue"></i>
                <div>
                  <p className="font-medium text-gray-900">Website:</p>
                  <p className="text-gray-600">www.company.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
