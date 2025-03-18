import { Footer } from '../../features/footer';
import { Header } from '../../features/header';

export const Root: React.FC = () => {
  return (
    <div className="bg-background flex h-full w-full flex-col justify-between overflow-y-auto overflow-x-hidden">
      <Header />

      <div className="flex h-fit w-full flex-col items-center justify-center font-[Arial] text-[5rem] font-bold">
        <h1 className="animate-in slide-in-from-left-full duration-700 ease-out">
          EXPLORE YOUR NEXT
        </h1>
        <h1 className="animate-in slide-in-from-right-full duration-700 ease-out">
          MOVIES AND TV SHOWS
        </h1>
      </div>

      <Footer />
    </div>
  );
};
