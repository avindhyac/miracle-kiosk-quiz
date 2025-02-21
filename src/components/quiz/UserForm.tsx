import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserData } from '../QuizFlow';

const SERVER_DOMAIN = 'http://localhost:3000'

interface UserFormProps {
  userData: UserData;
  onSubmit: (data: Pick<UserData, 'name' | 'phone' | 'email'>) => void;
}

const UserForm: React.FC<UserFormProps> = ({ userData, onSubmit }) => {
  const [name, setName] = useState(userData.name);
  const [phone, setPhone] = useState(userData.phone);
  const [email, setEmail] = useState(userData.email);
  const [errors, setErrors] = useState<{ contact?: string }>({});
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      const newErrors: { contact?: string } = {};
      if (!email && !phone) {
        newErrors.contact = "Please provide either email or phone number";
        setIsValid(false);
      } else if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.contact = "Please enter a valid email address";
        setIsValid(false);
      } else if (phone && !(phone.match(/^0\d{9}$/) || phone.match(/^[1-9]\d{8}$/))) {
        newErrors.contact = "Please enter a valid phone number";
        setIsValid(false);
      } else {
        setIsValid(true);
      }
      setErrors(newErrors);
    };

    validateForm();
  }, [email, phone, name]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setLoading(true);
      const formData = { name, phone, email };
      try {
        await axios.post(`${SERVER_DOMAIN}/submit`, formData, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log(`Success! ${name}'s form has been submitted to the database`);
      } catch (error) {
        console.error("Error submitting form", error);
      }
      setLoading(false);
      onSubmit(formData);
    }
  };
  
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-lg">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">
          Let's Get Started
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-2xl text-primary/70 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 text-2xl border-2 border-primary-light rounded-xl focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-2xl text-primary/70 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 text-2xl border-2 border-primary-light rounded-xl focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-2xl text-primary/70 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-6 py-4 text-2xl border-2 border-primary-light rounded-xl focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all mb-10"
            />
          </div>
          {errors.contact && <div className="text-red-500 text-lg mt-2">{errors.contact}</div>}
          <button
            type="submit"
            disabled={!isValid || loading}
            className="w-full bg-primary text-white text-2xl py-4 rounded-xl hover:bg-primary/90 transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
          {loading && (
            <div className="flex justify-center mt-4">
              <div className="w-6 h-6 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserForm;
