'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const featuredGames = [
  {
    id: "1",
    title: "Adventure Quest",
    description: "Epic fantasy adventure with stunning visuals",
    image: "https://placehold.co/600x300?text=Adventure+Quest+Epic+Fantasy+Game",
    category: "Adventure",
    rating: 4.8,
    trending: true
  },
  {
    id: "2", 
    title: "Space Defenders",
    description: "Intense space combat and strategy",
    image: "https://placehold.co/600x300?text=Space+Defenders+Combat+Strategy",
    category: "Action",
    rating: 4.6,
    trending: false
  },
  {
    id: "3",
    title: "Puzzle Master",
    description: "Brain-teasing challenges for all ages",
    image: "https://placehold.co/600x300?text=Puzzle+Master+Brain+Challenges",
    category: "Puzzle", 
    rating: 4.9,
    trending: true
  }
];

export default function FeaturedGames() {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">Featured Games</h2>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900">
          View All
        </Button>
      </div>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {featuredGames.map((game) => (
          <Card key={game.id} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative">
              <img 
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge variant="secondary" className="bg-black/50 text-white border-0">
                  {game.category}
                </Badge>
                {game.trending && (
                  <Badge className="bg-red-500 text-white border-0">
                    🔥 Trending
                  </Badge>
                )}
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-medium">{game.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                {game.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {game.description}
              </p>
              
              <div className="flex gap-3">
                <Link href={`/game/${game.id}`} className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    🎮 Play Now
                  </Button>
                </Link>
                <Button variant="outline" size="icon" className="hover:bg-red-50 hover:border-red-300">
                  ❤️
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}