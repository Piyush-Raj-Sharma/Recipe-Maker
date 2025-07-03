import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg bg-[#1e1e2f] p-10 rounded-3xl shadow-lg border border-white/10 backdrop-blur"
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="text-7xl font-bold text-pink-500 drop-shadow-lg"
        >
          404
        </motion.h1>

        <p className="mt-4 text-lg text-gray-400">
          Oops! The page you're looking for doesn’t exist.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6"
        >
          <p className="text-sm text-gray-500">
            You might have typed the wrong URL or the page has been moved.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-full font-semibold text-white transition"
          >
            🏠 Go Back Home
          </Link>
        </motion.div>


        <motion.div
          className="mt-10 text-5xl"
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          🍛
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
