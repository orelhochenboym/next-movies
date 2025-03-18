import { Footer } from '../../features/footer';
import { Header } from '../../features/header';

export const Root: React.FC = () => {
  return (
    <div className="bg-background flex h-full w-full flex-col justify-between overflow-auto">
      <Header />

      <Footer />
    </div>
  );
};
