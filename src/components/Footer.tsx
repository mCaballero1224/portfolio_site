import SocialLinks from '@/components/SocialLinks';

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white text-center py-2"
    >
      <SocialLinks />
      <p
        id="copyright-line"
      >
        &copy; Michael Caballero (2025)
      </p>
    </footer>
  );
};

export default Footer;
