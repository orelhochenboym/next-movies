import { Footer } from '../../features/footer';
import { Header } from '../../features/header';
import { Hero } from '../../features/hero';

export const Root: React.FC = () => {
  return (
    <div className="bg-background flex h-full w-full flex-col justify-between overflow-y-auto overflow-x-hidden">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};
