import facebookIcon from '../../../../assets/facebook-share-icon.svg';
import linkedInIcon from '../../../../assets/linkedin-share-icon.svg';
import twitterIcon from '../../../../assets/twitter-share-icon.svg';
import instagramIcon from '../../../../assets/instagram-share-icon.svg';
import youtubeIcon from '../../../../assets/youtube-share-icon.svg';
import { NavLink } from 'react-router';
import { Button } from '../../../../components/button';

export const SocialMedia: React.FC = () => {
  const buttons: Pick<React.ComponentProps<'img'>, 'alt' | 'src'>[] = [
    { src: facebookIcon, alt: 'Facebook' },
    { src: linkedInIcon, alt: 'LinkedIn' },
    { src: twitterIcon, alt: 'Twitter' },
    { src: instagramIcon, alt: 'Instagram' },
    { src: youtubeIcon, alt: 'Youtube' },
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {buttons.map((button) => (
        <NavLink
          to="about:blank"
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
          key={button.alt}
        >
          <Button className="h-fit w-fit rounded-none border-none p-2 hover:bg-transparent">
            <img src={button.src} alt={button.alt} />
          </Button>
        </NavLink>
      ))}
    </div>
  );
};
