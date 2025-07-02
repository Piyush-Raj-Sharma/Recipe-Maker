import React from "react";
import { Sparkles, ChefHat, HeartHandshake, ScrollText } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white px-[8%] py-16">
      <div className="max-w-6xl mx-auto bg-[#1e1e2f] shadow-xl rounded-3xl overflow-hidden border border-white/10">
        <div className="md:flex">
          {/* Left Image */}
          <div className="md:w-1/2 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1592457711340-2412dc07b733?q=80&w=666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Cooking"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 p-10">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              About RecipeVerse 🍽️
            </h1>
            <p className="text-gray-400 text-center text-lg mb-10">
              Your ultimate destination for delicious inspirations, one recipe at a time.
            </p>

            {/* Sections */}
            <div className="space-y-10 text-gray-300">
              <section className="flex items-start gap-4">
                <Sparkles size={32} className="text-purple-400 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-white">Our Mission</h2>
                  <p className="mt-2">
                    We aim to empower every home cook by offering a platform where creativity meets flavor.
                    Whether you’re a beginner or a seasoned chef, our recipe app helps you share, explore, and enjoy culinary art.
                  </p>
                </div>
              </section>

              <section className="flex items-start gap-4">
                <ChefHat size={32} className="text-pink-400 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-white">What We Offer</h2>
                  <p className="mt-2">
                    Discover hundreds of recipes across categories – from quick snacks to gourmet meals. Add your own recipes,
                    customize cooking times, and upload images for a rich cooking experience.
                  </p>
                </div>
              </section>

              <section className="flex items-start gap-4">
                <HeartHandshake size={32} className="text-teal-400 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-white">Community Driven</h2>
                  <p className="mt-2">
                    RecipeVerse is built for food lovers, by food lovers. We believe food connects people.
                    That’s why we make it easy to share your recipes and experiences with a growing community of passionate cooks.
                  </p>
                </div>
              </section>

              <section className="flex items-start gap-4">
                <ScrollText size={32} className="text-indigo-400 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-white">Built with 💻 + ❤️</h2>
                  <p className="mt-2">
                    This app is handcrafted using React.js, Tailwind CSS, Zustand, and modern frontend best practices — with a passion for great UI and clean code.
                  </p>
                </div>
              </section>
            </div>

            {/* Highlights */}
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="bg-[#2c2c3c] border-l-4 border-purple-500 p-4 rounded-xl">
                <h3 className="text-lg font-bold text-purple-300">1K+ Recipes Shared</h3>
                <p className="text-sm text-gray-400">By passionate home cooks & foodies.</p>
              </div>
              <div className="bg-[#2c2c3c] border-l-4 border-pink-500 p-4 rounded-xl">
                <h3 className="text-lg font-bold text-pink-300">500+ Active Users</h3>
                <p className="text-sm text-gray-400">Daily users trying, rating, and loving recipes.</p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-16 text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} RecipeVerse. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
