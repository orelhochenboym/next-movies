import facebookIcon from '../../../../assets/facebook-share-icon.svg';
import linkedInIcon from '../../../../assets/linkedin-share-icon.svg';
import twitterIcon from '../../../../assets/twitter-share-icon.svg';
import instagramIcon from '../../../../assets/instagram-share-icon.svg';
import youtubeIcon from '../../../../assets/youtube-share-icon.svg';

export const SocialMedia: React.FC = () => {
  return (
    <div className="flex gap-8">
      <img src={facebookIcon} alt="Facebook" />
      <img src={linkedInIcon} alt="LinkedIn" />
      <img src={twitterIcon} alt="Twitter" />
      <img src={instagramIcon} alt="Instagram" />
      <img src={youtubeIcon} alt="Youtube" />
    </div>
  );
};
