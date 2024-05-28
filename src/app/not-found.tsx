"use client";
import { Clapperboard } from "lucide-react";
export default function NotFound() {
  return (
    <html>
      <body className="bg-[#010028]">
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <p className="text-xl text-white mb-8">
              Oops! The page you re looking for doesn t exist.
            </p>
            <div className="flex items-center justify-center my-10">
              <Clapperboard color="green" size={100} />
            </div>
            <a
              href="/"
              className="px-6 py-3 bg-primary font-bold text-white rounded-full hover:bg-indigo-700"
            >
              Go back home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
