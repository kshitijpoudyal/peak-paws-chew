'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "8d78df7d-6d79-4878-8a6b-ea0cbfc2c579");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        e.currentTarget.reset();
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Peak Paws Logo" 
              width={180}
              height={60}
              className="object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-amber-800 hover:text-amber-600">About</a>
            <a href="#benefits" className="text-amber-800 hover:text-amber-600">Benefits</a>
            <a href="#products" className="text-amber-800 hover:text-amber-600">Products</a>
            <a href="#shop" className="text-amber-800 hover:text-amber-600">Shop</a>
            <a href="#contact" className="text-amber-800 hover:text-amber-600">Contact</a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-amber-900 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-amber-900 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-amber-900 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg border border-amber-200">
            <a 
              href="#about" 
              className="block px-6 py-3 text-amber-800 hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#benefits" 
              className="block px-6 py-3 text-amber-800 hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#products" 
              className="block px-6 py-3 text-amber-800 hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#shop" 
              className="block px-6 py-3 text-amber-800 hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a 
              href="#contact" 
              className="block px-6 py-3 text-amber-800 hover:bg-amber-50 hover:text-amber-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Main Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-6xl font-bold text-amber-900 mb-6">
          Authentic Himalayan Recipe
        </h2>
        <p className="text-2xl text-amber-700 mb-8 max-w-3xl mx-auto">
          Natural, Long-Lasting Dog Chews from the Himalayas
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Give your dog the gift of authentic Himalayan yak cheese chews - 100% natural, 
          grain-free, and packed with protein for hours of healthy chewing enjoyment.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-amber-900 text-center mb-12">
            The Peak Promise
          </h3>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed text-center italic">
              "Crafted from an ancient recipe, our Himalayan Yak Chews are made using traditional 
              methods in the pristine foothills of the Himalayas. We use 100% natural ingredients, 
              primarily yak and cow milk, with a dash of lime juice and a pinch of salt to coagulate 
              the milk. These chews are sun dried and smoke cured for weeks, resulting in a hard, 
              flavourful, and long lasting, satisfying treat that connects your cherished companion 
              to the spirit of the world's highest peaks."
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏔️</div>
              <h4 className="text-xl font-bold text-amber-800 mb-3">Authentic Himalayan</h4>
              <p className="text-gray-600">
                Made from traditional yak milk recipe used for centuries in the Himalayan mountains.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌱</div>
              <h4 className="text-xl font-bold text-amber-800 mb-3">100% Natural</h4>
              <p className="text-gray-600">
                Made from Milk, Salt and Lime only. No artificial preservatives, colors, or flavors.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💪</div>
              <h4 className="text-xl font-bold text-amber-800 mb-3">Long-Lasting</h4>
              <p className="text-gray-600">
                Super hard and durable - keeps even the most aggressive chewers entertained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-amber-900 text-center mb-12">
            Health Benefits
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">💪</div>
              <div>
                <h4 className="text-xl font-bold text-amber-800 mb-2">High in Protein</h4>
                <p className="text-gray-600">Supports strong muscles and overall health</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🦷</div>
              <div>
                <h4 className="text-xl font-bold text-amber-800 mb-2">Dental Health</h4>
                <p className="text-gray-600">Helps clean teeth and reduce plaque buildup</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">🌾</div>
              <div>
                <h4 className="text-xl font-bold text-amber-800 mb-2">Grain & Gluten Free</h4>
                <p className="text-gray-600">Perfect for dogs with sensitivities</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">✨</div>
              <div>
                <h4 className="text-xl font-bold text-amber-800 mb-2">Easily Digestible</h4>
                <p className="text-gray-600">Gentle on your dog's stomach and easy to digest</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-amber-900 text-center mb-8">
            Our Products
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the perfect size for your furry friend
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Small */}
            <a 
              href="#shop"
              className="group cursor-pointer"
            >
              <div className="rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all overflow-hidden">
                <div className="aspect-square relative">
                  <Image 
                    src="/products/small.jpeg" 
                    alt="Small Size Himalayan Yak Chew - Up to 15 lbs" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-2xl font-bold text-amber-900 text-center mb-2">Small</h4>
                  <p className="text-gray-600 text-center">Perfect for small dogs up to 15 lbs</p>
                </div>
              </div>
            </a>

            {/* Medium */}
            <a 
              href="#shop"
              className="group cursor-pointer"
            >
              <div className="rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all overflow-hidden">
                <div className="aspect-square relative">
                  <Image 
                    src="/products/medium.jpeg" 
                    alt="Medium Size Himalayan Yak Chew - 15-55 lbs" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-2xl font-bold text-amber-900 text-center mb-2">Medium</h4>
                  <p className="text-gray-600 text-center">Ideal for dogs 15-55 lbs</p>
                </div>
              </div>
            </a>

            {/* Large */}
            <a 
              href="#shop"
              className="group cursor-pointer"
            >
              <div className="rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all overflow-hidden">
                <div className="aspect-square relative">
                  <Image 
                    src="/products/large.jpeg" 
                    alt="Large Size Himalayan Yak Chew - 55+ lbs" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="text-2xl font-bold text-amber-900 text-center mb-2">Large</h4>
                  <p className="text-gray-600 text-center">Great for dogs 55+ lbs</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-amber-900 text-center mb-8">
            Where to Buy
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find our Himalayan Yack Chews at your favorite pet retailers
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a 
              href="https://www.amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-amber-100 to-amber-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border-2 border-amber-200 hover:border-amber-400"
            >
              <div className="text-5xl mb-4">📦</div>
              <h4 className="text-2xl font-bold text-amber-900 mb-2">Amazon</h4>
              <p className="text-amber-700">Shop on Amazon</p>
            </a>
            <a 
              href="https://www.chewy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-amber-100 to-amber-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border-2 border-amber-200 hover:border-amber-400"
            >
              <div className="text-5xl mb-4">🐾</div>
              <h4 className="text-2xl font-bold text-amber-900 mb-2">Chewy</h4>
              <p className="text-amber-700">Shop on Chewy</p>
            </a>
            <a 
              href="https://www.kiwipets.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-amber-100 to-amber-50 p-8 rounded-xl text-center hover:shadow-lg transition-all border-2 border-amber-200 hover:border-amber-400"
            >
              <div className="text-5xl mb-4">🥝</div>
              <h4 className="text-2xl font-bold text-amber-900 mb-2">Kiwi Pets</h4>
              <p className="text-amber-700">Shop on Kiwi Pets</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-amber-900 text-center mb-8">
            Get in Touch
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Have questions about our Himalayan Yack Chews? We'd love to hear from you!
          </p>
          <div className="max-w-2xl mx-auto">
            <form 
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-lg space-y-6"
            >
              <input type="hidden" name="redirect" value="false" />
              {submitStatus && (
                <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {submitStatus.message}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-amber-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-amber-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-amber-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-amber-900"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-amber-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none text-amber-900"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors disabled:bg-amber-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 font-semibold">Himalayan Yack Chew</p>
          <p className="text-amber-200 text-sm">
            Premium natural dog chews from the Himalayas
          </p>
          <p className="text-amber-300 text-xs mt-4">
            © 2025 Himalayan Yack Chew. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
