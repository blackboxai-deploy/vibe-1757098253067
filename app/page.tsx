import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedGames from '@/components/FeaturedGames';
import Categories from '@/components/Categories';
import GameGrid from '@/components/GameGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      <div className="container mx-auto px-4">
        <HeroSection />
        <FeaturedGames />
        <Categories />
        <GameGrid />
      </div>
    </main>
  );
}