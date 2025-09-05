"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Star, Users, Clock } from "lucide-react";

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  players: number;
  duration: string;
  featured: boolean;
}

const games: Game[] = [
  {
    id: "1",
    title: "Space Adventure",
    description: "Explore the galaxy in this thrilling space adventure game",
    image: "/api/placeholder/300/200",
    category: "Adventure",
    rating: 4.8,
    players: 1250,
    duration: "15-30 min",
    featured: true
  },
  {
    id: "2",
    title: "Puzzle Master",
    description: "Challenge your mind with complex puzzles and brain teasers",
    image: "/api/placeholder/300/200",
    category: "Puzzle",
    rating: 4.6,
    players: 890,
    duration: "10-20 min",
    featured: false
  },
  {
    id: "3",
    title: "Racing Thunder",
    description: "High-speed racing action with stunning graphics",
    image: "/api/placeholder/300/200",
    category: "Racing",
    rating: 4.9,
    players: 2100,
    duration: "5-15 min",
    featured: true
  },
  {
    id: "4",
    title: "Strategy Empire",
    description: "Build your empire and conquer the world",
    image: "/api/placeholder/300/200",
    category: "Strategy",
    rating: 4.7,
    players: 1680,
    duration: "30-60 min",
    featured: false
  },
  {
    id: "5",
    title: "Action Hero",
    description: "Fast-paced action game with epic battles",
    image: "/api/placeholder/300/200",
    category: "Action",
    rating: 4.5,
    players: 3200,
    duration: "20-40 min",
    featured: true
  },
  {
    id: "6",
    title: "Card Master",
    description: "Strategic card game with unique mechanics",
    image: "/api/placeholder/300/200",
    category: "Card",
    rating: 4.4,
    players: 750,
    duration: "15-25 min",
    featured: false
  }
];

const categories = ["All", "Adventure", "Puzzle", "Racing", "Strategy", "Action", "Card"];

export default function GameGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredGame, setHoveredGame] = useState<string | null>(null);

  const filteredGames = selectedCategory === "All" 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Featured Games</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <Card
            key={game.id}
            className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
              game.featured ? "ring-2 ring-blue-500" : ""
            }`}
            onMouseEnter={() => setHoveredGame(game.id)}
            onMouseLeave={() => setHoveredGame(null)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {game.featured && (
                  <Badge className="absolute top-2 left-2 bg-blue-600">
                    Featured
                  </Badge>
                )}
                <div
                  className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredGame === game.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Button size="lg" className="rounded-full">
                    <Play className="w-5 h-5 mr-2" />
                    Play Now
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold truncate">{game.title}</h3>
                  <Badge variant="secondary">{game.category}</Badge>
                </div>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {game.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{game.rating}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{game.players.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{game.duration}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No games found in this category.</p>
        </div>
      )}
    </div>
  );
}