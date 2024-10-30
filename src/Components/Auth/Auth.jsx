import React, { useState } from 'react';
import './Auth.scss';
import { FaGoogle, FaFacebookF, FaInstagram } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    country: '',
    referralCode: '',
  });

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'IN', name: 'India' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' },
    // Add more countries as needed
  ];

  const toggleAuthMode = () => setIsSignup(!isSignup);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <div className="form-header">
          <h2>{isSignup ? 'Create Account' : 'Welcome Back!'}</h2>
          <p>{isSignup ? 'Sign up to start your adventure' : 'Login to continue'}</p>
        </div>

        <form className="auth-form">
          {isSignup && (
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={userData.fullName}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
          {isSignup && (
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={userData.phone}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleInputChange}
            required
          />

          {isSignup && (
            <>
              <select
                name="country"
                value={userData.country}
                onChange={handleInputChange}
                className="country-select"
                required
              >
                <option value="" disabled>
                  Country
                </option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    <ReactCountryFlag
                      countryCode={country.code}
                      svg
                      style={{
                        width: '20px',
                        height: '15px',
                        marginRight: '8px',
                      }}
                    />
                    {country.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="referralCode"
                placeholder="Referral Code (Optional)"
                value={userData.referralCode}
                onChange={handleInputChange}
              />
            </>
          )}

          <button type="submit" className="primary-btn">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
