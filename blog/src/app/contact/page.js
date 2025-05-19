'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[rgb(var(--foreground))]">Contact Us</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-[rgb(var(--foreground))]">Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded 
                      bg-[rgba(var(--foreground),0.05)]
                      border-[rgba(var(--foreground),0.2)]
                      text-[rgb(var(--foreground))]
                      focus:bg-[rgba(var(--foreground),0.1)]
                      focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-2 text-[rgb(var(--foreground))]">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded 
                      bg-[rgba(var(--foreground),0.05)]
                      border-[rgba(var(--foreground),0.2)]
                      text-[rgb(var(--foreground))]
                      focus:bg-[rgba(var(--foreground),0.1)]
                      focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-2 text-[rgb(var(--foreground))]">Message</label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-2 border rounded h-32
                      bg-[rgba(var(--foreground),0.05)]
                      border-[rgba(var(--foreground),0.2)]
                      text-[rgb(var(--foreground))]
                      focus:bg-[rgba(var(--foreground),0.1)]
                      focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded 
                    bg-[rgb(var(--foreground))] 
                    text-[rgb(var(--background))]
                    hover:opacity-90 
                    transition-opacity"
        >
          Send Message
        </button>
        {status && <p className="mt-4 text-[rgba(var(--foreground),0.7)]">{status}</p>}
      </form>
    </div>
  );
}