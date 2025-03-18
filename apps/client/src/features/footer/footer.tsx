import icon from '../../assets/icon.svg';

export const Footer: React.FC = () => {
  return (
    <div className="bg-background-footer flex h-fit w-full flex-col items-center justify-center gap-4 py-8 font-[georgia] text-white">
      <img src={icon} alt="Next Movies Icon" />

      <div className="flex h-fit w-fit flex-col items-center justify-center gap-4">
        <h1 className="text-4xl">Contact us</h1>

        <div className="flex h-fit w-fit flex-col items-center justify-center">
          <p>support@nextmovies.com</p>
          <p>Mon - Fri | 6:00am - 5:00pm PT</p>
        </div>

        <div className="flex gap-4">Social Media</div>
      </div>
    </div>
  );
};
