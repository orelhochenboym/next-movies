import { Footer } from '../../features/footer';
import { Header } from '../../features/header';
import { Hero } from '../../features/hero';
import { Movies } from '../../features/movies';

export const Root: React.FC = () => {
  return (
    <div className="bg-background flex h-full w-full flex-col justify-between gap-20 overflow-y-auto overflow-x-hidden">
      <Header />
      <Hero />
      <Movies />
      <Footer />
    </div>
  );
};
