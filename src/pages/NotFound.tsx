import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

// Lottie Animation URL: This is a free-to-use 404/space-themed animation from LottieFiles.
// Source: https://lottiefiles.com/animations/404-error-page-o7zS6q2wYf
const LOTTIE_URL = "https://lottie.host/808ec13a-a162-43d9-93e5-8f694e017646/zJ5wT1Xk3p.json";

const NotFound = () => {
  const location = useLocation();

  // Log the 404 error (good for debugging/tracking)
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      {/* Lottie Animation Player */}
      <Player
        autoplay
        loop
        src={LOTTIE_URL}
        style={{ height: "400px", width: "400px" }}
        className="mb-8"
      />

      <div className="text-center">
        <h1 className="mb-2 text-6xl font-extrabold tracking-wider text-red-500 md:text-8xl">
          404
        </h1>
        <p className="mb-6 text-xl text-gray-300 md:text-2xl">
          Its look like requested Page Not found.
        </p>
        
        {/* Styled Return Button */}
        <a
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-4 py-3 text-lg font-semibold 
                     text-white shadow-lg transition duration-300 ease-in-out 
                     hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;