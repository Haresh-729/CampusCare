import React, { useState } from 'react';
import loginAnimation from '../assets/landing/Login.svg';

const Login = () => {
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    // Placeholder for Google Login logic
    console.log('Google Login');
  };

  const handleGithubLogin = () => {
    // Placeholder for GitHub Login logic
    console.log('GitHub Login');
  };

  return (
    <div className="flex justify-evenly items-center min-h-screen bg-gray-50">
      <div className="w-1/2 mt-[3rem] hidden md:flex justify-center items-center">
        <img src={`${loginAnimation}?${new Date().getTime()}`} alt="Login" width="400" className='mx-auto' srcSet="" />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-2/5">
        <h2 className="text-3xl font-bold mb-6 text-center text-dark-blue">Login to your Account</h2>

        <div className="flex justify-around mb-4">
          <button
            onClick={handleGoogleLogin}
            className="bg-dark-blue text-white px-4 py-2 rounded-md hover:bg-yellow border-none transition"
          >
            Google Login
          </button>
          <button
            onClick={handleGithubLogin}
            className="bg-dark-blue text-white px-4 py-2 rounded-md hover:bg-yellow border-none transition"
          >
            GitHub Login
          </button>
        </div>

        {/* Form */}
        <form>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-dark-blue font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-light-gray border-none px-4 py-2 rounded-lg focus:ring focus:ring-dark-blue text-superiory-blue placeholder-superiory-blue"
                placeholder="you@example.com"
              />
            </div>
          
            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-dark-blue font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-light-gray border-none px-4 py-2 rounded-lg focus:ring focus:ring-dark-blue text-superiory-blue placeholder-superiory-blue"
                placeholder="********"
              />
            </div>
          

          {/* Login Button */}
          <button className="bg-dark-blue text-yellow border-none w-full py-2 rounded-lg hover:bg-yellow hover:text-dark-blue transition">
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
