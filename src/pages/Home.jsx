import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Flame, ChefHat, Heart } from "lucide-react";

const Home = () => {
  const trendingDishes = [
    {
      name: "Sahi Paneer",
      image:
        "https://img.freepik.com/premium-photo/shahi-paneer-indian-main-course_954355-427.jpg",
    },
    {
      name: "Samosa",
      image:
        "https://static.vecteezy.com/system/resources/previews/022/396/485/large_2x/samosa-with-cold-drink-ai-generated-free-photo.jpg",
    },
    {
      name: "Rasgulla",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.ym6l_BD-cCbxFbbZYZ_nIAHaE7?pid=Api&P=0&h=220",
    },
  ];

  return (
    <div className="text-white bg-[#1c1b1f]">
      {/* Hero Section */}
      <section
        className="relative mt-9 h-[95vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606914469030-681790351049?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="z-10 px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-300 drop-shadow-lg">
            भारत के स्वादों का संगम 🍛
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Discover traditional Indian recipes, modern twists & community favorites – all in one place.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              to="/recipe"
              className="bg-orange-600 hover:bg-orange-500 px-6 py-3 rounded-full font-semibold text-lg transition"
            >
              🍽️ Explore Recipes
            </Link>
            <Link
              to="/create-recipe"
              className="bg-white text-orange-700 hover:bg-gray-200 px-6 py-3 rounded-full font-semibold text-lg transition"
            >
              🍳 Add Your Own
            </Link>
          </div>
        </div>
      </section>

      {/* Indian Features */}
      <section className="py-16 px-[8%] bg-[#292834]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400">Why Choose Us</h2>
          <p className="text-gray-400 mt-2">Desi swaad, modern touch ke saath.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 p-6 rounded-2xl border border-orange-300/30 hover:border-orange-400 transition">
            <ChefHat size={40} className="mx-auto text-yellow-300 mb-4" />
            <h3 className="text-xl font-semibold">Authentic Experience</h3>
            <p className="text-gray-400 mt-2">
              Add your home recipes, passed down from generations.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-orange-300/30 hover:border-orange-400 transition">
            <Flame size={40} className="mx-auto text-red-400 mb-4" />
            <h3 className="text-xl font-semibold">Quick & Easy</h3>
            <p className="text-gray-400 mt-2">
              Get quick & simple recipes with ingredients from your kitchen.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-orange-300/30 hover:border-orange-400 transition">
            <Heart size={40} className="mx-auto text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold">Join the Community</h3>
            <p className="text-gray-400 mt-2">
              Share and connect with fellow Indian foodies.
            </p>
          </div>
        </div>
      </section>

      {/* Trending Recipes */}
      <section className="py-16 px-[8%] bg-[#1f1f2f]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-400 mb-2">Trending Recipes</h2>
          <p className="text-gray-400">हर राज्य का स्वाद, एक जगह पर।</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {trendingDishes.map((dish, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-orange-300/20 hover:border-orange-500 transition"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-60 object-cover"
              />
              <div className="bg-white/10 p-4 text-center">
                <h3 className="text-xl font-semibold capitalize">{dish.name}</h3>
                <p className="text-gray-300 text-sm mt-2">हर बाइट में भारत!</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-[8%] bg-[#2b2b3f]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-400">💬 What Our Cooks Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-300">
          <div className="bg-white/10 p-6 rounded-xl border border-yellow-500/20">
            “I uploaded my grandma's recipe and it became an instant hit!”
            <div className="mt-4 text-right text-orange-300 font-medium">- काव्या शर्मा</div>
          </div>
          <div className="bg-white/10 p-6 rounded-xl border border-yellow-500/20">
            “Sleek UI and amazing local flavors – RecipeVerse is a delight!”
            <div className="mt-4 text-right text-orange-300 font-medium">- आर्यन जोशी</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-[8%] bg-gradient-to-r from-orange-600 to-yellow-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Cook & Share with Love ❤️</h2>
        <p className="mb-8 text-lg">
          आज ही जुड़िए RecipeVerse के साथ और अपनी खास recipes दुनिया से शेयर करें।
        </p>
        <Link
          to="/create"
          className="inline-block bg-white text-orange-700 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          🍳 अपनी Recipe जोड़ें
        </Link>
      </section>
    </div>
  );
};

export default Home;
