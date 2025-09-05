import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Users, Star, Clock } from 'lucide-react';

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  players: number;
  rating: number;
  duration: string;
  isNew?: boolean;
  isFeatured?: boolean;
  onPlay: (gameId: string) => void;
}

export const GameCard: React.FC<GameCardProps> = ({
  id,
  title,
  description,
  image,
  category,
  players,
  rating,
  duration,
  isNew = false,
  isFeatured = false,
  onPlay
}) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      {isNew && (
        <Badge className="absolute top-2 left-2 z-10 bg-green-500 hover:bg-green-600">
          New
        </Badge>
      )}
      {isFeatured && (
        <Badge className="absolute top-2 right-2 z-10 bg-purple-500 hover:bg-purple-600">
          Featured
        </Badge>
      )}
      
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              size="lg"
              className="bg-white/90 text-black hover:bg-white"
              onClick={() => onPlay(id)}
            >
              <Play className="w-5 h-5 mr-2" />
              Play Now
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <CardTitle className="text-lg mb-2 line-clamp-1">{title}</CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{players} players</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          variant="outline"
          onClick={() => onPlay(id)}
        >
          <Play className="w-4 h-4 mr-2" />
          Start Game
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;