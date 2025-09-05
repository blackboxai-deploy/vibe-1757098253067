'use client';

import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";

export default function HeroSection() {
  return (
    <section className="text-center py-20 mb-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <span className="text-6xl mb-4 block animate-bounce">🎮</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Play Garance
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover thousands of amazing games, compete with friends, and experience 
            the ultimate gaming platform. Your adventure starts here!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            🚀 Start Playing Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-white border-white hover:bg-white hover:text-purple-900 text-lg px-8 py-6 rounded-xl"
          >
            📱 Download App
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center items-center gap-8 text-gray-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-sm">Games</div>
          </div>
          <div className="w-px h-8 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500K+</div>
            <div className="text-sm">Players</div>
          </div>
          <div className="w-px h-8 bg-gray-600"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm">Online</div>
          </div>
        </div>
      </div>
    </section>
  );
}