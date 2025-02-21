import React, { useState } from 'react';
import { UserData } from '../QuizFlow';

interface UserFormProps {
  userData: UserData;
  onSubmit: (data: Pick<UserData, 'name' | 'phone' | 'email'>) => void;
}

const UserForm: React.FC<UserFormProps> = ({ userData, onSubmit }) => {
  const [name, setName] = useState(userData.name);
  const [phone, setPhone] = useState(userData.phone);
  const [email, setEmail] = useState(userData.email)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, phone, email });
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
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 text-2xl border-2 border-primary-light rounded-xl focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-all"
              required
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
              required
            />
          </div>

          

          <button
            type="submit"
            className="w-full bg-primary text-white text-2xl py-4 rounded-xl hover:bg-primary/90 transition-colors mt-8"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm