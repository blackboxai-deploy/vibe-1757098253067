'use client';

import { Card } from "@/components/ui/card";

const categories = [
  {
    name: "Action",
    icon: "⚔️",
    count: 156,
    color: "from-red-500 to-orange-500",
    description: "Fast-paced games with intense combat"
  },
  {
    name: "Adventure", 
    icon: "🗺️",
    count: 89,
    color: "from-green-500 to-emerald-500",
    description: "Explore vast worlds and epic stories"
  },
  {
    name: "Puzzle",
    icon: "🧩", 
    count: 234,
    color: "from-purple-500 to-violet-500",
    description: "Challenge your mind with brain teasers"
  },
  {
    name: "Racing",
    icon: "🏎️",
    count: 67,
    color: "from-blue-500 to-cyan-500", 
    description: "High-speed racing and driving games"
  },
  {
    name: "Strategy",
    icon: "♟️",
    count: 123,
    color: "from-indigo-500 to-purple-500",
    description: "Plan your moves and outsmart opponents"
  },
  {
    name: "Sports",
    icon: "⚽",
    count: 78,
    color: "from-yellow-500 to-orange-500",
    description: "Athletic competitions and sports simulations"
  }
];

export default function Categories() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-8">Game Categories</h2>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <Card 
            key={index}
            className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className={`h-24 bg-gradient-to-r ${category.color} relative flex items-center justify-center`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <span className="text-4xl relative z-10">{category.icon}</span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                  {category.name}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {category.count} games
                </span>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}