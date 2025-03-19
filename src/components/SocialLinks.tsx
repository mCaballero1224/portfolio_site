import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {

  const socialLinks = [
    {href: 'https://github.com/mCaballero1224', icon: faGithub},
    {href: 'https://www.linkedin.com/in/mcaballero-dev', icon: faLinkedin},
    {href: 'https://www.youtube.com/@michaelcaballero-dev', icon: faYoutube},
    {href: 'https://x.com/straysh333p', icon: faTwitter},
  ];

  return (
    <div
      className="container py-2 mx-auto"
    >
      <ul
        className="flex flex-row justify-center items-center mx-auto"
      >
        {socialLinks.map((link, index) => (
        <li
            key={index}
            className="group mx-3"
          >
            <Link
              href={link.href}
              target="_"
            >
              <FontAwesomeIcon
                icon={link.icon} 
                className="h-6 group-hover:text-lime-400"
              />
            </Link>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
