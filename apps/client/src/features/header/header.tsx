import logo1x from '../../assets/logo1x.png';

export const Header: React.FC = () => {
  return (
    <div className="h-fit w-full bg-white p-4 py-4 md:px-16 lg:px-24">
      <img
        src={logo1x}
        alt="Next Movies 1x Logo"
        className="animate-in slide-in-from-left-full w-1/2 duration-700 ease-out xl:w-48"
      />
    </div>
  );
};
