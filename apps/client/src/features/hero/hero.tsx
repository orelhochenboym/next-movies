export const Hero: React.FC = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center font-[Arial] text-[1.6875rem] font-bold leading-none md:text-5xl lg:text-6xl xl:text-[5rem]">
      <h1 className="animate-in slide-in-from-left-full line duration-700 ease-out">
        EXPLORE YOUR NEXT
      </h1>
      <h1 className="animate-in slide-in-from-right-full duration-700 ease-out">
        MOVIES AND TV SHOWS
      </h1>
    </div>
  );
};
