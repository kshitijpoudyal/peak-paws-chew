export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-amber-900">Himalayan Yack Chew</h1>
          <div className="space-x-6">
            <a href="#about" className="text-amber-800 hover:text-amber-600">About</a>
            <a href="#benefits" className="text-amber-800 hover:text-amber-600">Benefits</a>
            <a href="#contact" className="text-amber-800 hover:text-amber-600">Contact</a>
          </div>
        </nav>
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
                No artificial preservatives, colors, or flavors. Just pure yak cheese goodness.
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
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-amber-800 mb-2">High in Protein</h4>
              <p className="text-gray-600">Supports strong muscles and overall health</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-amber-800 mb-2">Dental Health</h4>
              <p className="text-gray-600">Helps clean teeth and reduce plaque buildup</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-amber-800 mb-2">Grain & Gluten Free</h4>
              <p className="text-gray-600">Perfect for dogs with sensitivities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-amber-800 mb-2">Low Odor</h4>
              <p className="text-gray-600">No unpleasant smells in your home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-amber-900 mb-8">
            Get in Touch
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our Himalayan Yack Chews? We'd love to hear from you!
          </p>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors">
            Contact Us
          </button>
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
