import logo1x from '../../assets/logo1x.png';

export const Header: React.FC = () => {
  return (
    <div className="h-fit w-full bg-white px-24 py-4">
      <img
        src={logo1x}
        alt="Next Movies 1x Logo"
        className="animate-in slide-in-from-left-full duration-700 ease-out"
      />
    </div>
  );
};
