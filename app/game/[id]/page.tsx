'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const gameDetails = {
  "1": {
    title: "Adventure Quest",
    description: "Embark on an epic journey through mystical lands filled with ancient mysteries and challenging puzzles. Discover hidden treasures, battle mythical creatures, and uncover the secrets of a forgotten civilization.",
    category: "Adventure",
    rating: 4.8,
    players: "12,543",
    features: ["Single Player", "Story Mode", "Achievements", "Cloud Save"],
    screenshots: [
      "https://placehold.co/800x450?text=Adventure+Quest+Gameplay+Screenshot+1",
      "https://placehold.co/800x450?text=Adventure+Quest+Gameplay+Screenshot+2",
      "https://placehold.co/800x450?text=Adventure+Quest+Gameplay+Screenshot+3"
    ]
  },
  "2": {
    title: "Space Defenders",
    description: "Defend the galaxy against alien invasions in this intense space shooter. Command your fleet, upgrade your ships, and engage in epic battles across the cosmos.",
    category: "Action",
    rating: 4.6,
    players: "8,921",
    features: ["Multiplayer", "Co-op Mode", "Leaderboards", "Daily Challenges"],
    screenshots: [
      "https://placehold.co/800x450?text=Space+Defenders+Battle+Scene",
      "https://placehold.co/800x450?text=Space+Defenders+Fleet+Command",
      "https://placehold.co/800x450?text=Space+Defenders+Alien+Boss"
    ]
  },
  "3": {
    title: "Puzzle Master",
    description: "Challenge your mind with hundreds of brain-teasing puzzles. From logic problems to pattern recognition, test your intellectual prowess.",
    category: "Puzzle",
    rating: 4.9,
    players: "15,678",
    features: ["500+ Levels", "Hint System", "Time Challenges", "Progress Tracking"],
    screenshots: [
      "https://placehold.co/800x450?text=Puzzle+Master+Level+Interface",
      "https://placehold.co/800x450?text=Puzzle+Master+Complex+Challenge",
      "https://placehold.co/800x450?text=Puzzle+Master+Victory+Screen"
    ]
  }
};

export default function GamePage({ params }: { params: { id: string } }) {
  const game = gameDetails[params.id as keyof typeof gameDetails];
  
  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Game Not Found</h1>
          <p className="text-gray-600 mb-6">The game you're looking for doesn't exist.</p>
          <Link href="/">
            <Button>Back to Games</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto p-8">
        <Link href="/" className="inline-block mb-6">
          <Button variant="outline">← Back to Games</Button>
        </Link>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Game Info */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <img 
                src={game.screenshots[0]}
                alt={game.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
                  <Badge variant="secondary" className="mb-4">{game.category}</Badge>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-500">⭐ {game.rating}</div>
                  <div className="text-sm text-gray-600">{game.players} players</div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{game.description}</p>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  🎮 Play Now
                </Button>
                <Button variant="outline" size="lg">
                  ❤️ Add to Favorites
                </Button>
              </div>
            </Card>
            
            {/* Screenshots */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {game.screenshots.slice(1).map((screenshot, index) => (
                  <img 
                    key={index}
                    src={screenshot}
                    alt={`${game.title} screenshot ${index + 2}`}
                    className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  />
                ))}
              </div>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div>
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Game Features</h3>
              <div className="space-y-2">
                {game.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Similar Games</h3>
              <div className="space-y-3">
                {Object.entries(gameDetails)
                  .filter(([id]) => id !== params.id)
                  .slice(0, 2)
                  .map(([id, similarGame]) => (
                    <Link key={id} href={`/game/${id}`}>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <img 
                          src={`https://placehold.co/60x60?text=${similarGame.title.charAt(0)}`}
                          alt={similarGame.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <div className="font-medium text-sm">{similarGame.title}</div>
                          <div className="text-xs text-gray-500">⭐ {similarGame.rating}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}