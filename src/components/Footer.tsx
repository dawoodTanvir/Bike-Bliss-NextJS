import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white py-8 px-4 sm:px-8 lg:px-[5%] font-sans">
      <div className="container mx-auto">
      
        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-800 pb-6">
          
        
          <div className="flex items-center mb-6 md:mb-0">
         
            <Image src="/images/Motorcycle-Bike-Transparent-Background.png" alt="Bike Bliss Logo" width={40} height={40} />
            <span className="text-xl font-bold ml-3">Bike Bliss</span>
          </div>
          
          
          <nav className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mb-6 md:mb-0">
            <Link href="/features" className="hover:text-purple-300 transition-colors duration-300">
              Features
            </Link>
            <Link href="/testimonials" className="hover:text-purple-300 transition-colors duration-300">
              Testimonials
            </Link>
            <Link href="/faqs" className="hover:text-purple-300 transition-colors duration-300">
              Faqs
            </Link>
          </nav>

       
          <div className="flex items-center space-x-6">
            <Link href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-300 transition-colors duration-300">
              <FaFacebookF />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-300 transition-colors duration-300">
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-300 transition-colors duration-300">
              <FaTwitter />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-300 transition-colors duration-300">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

      

     
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-6">
          <Link href="/privacy-policy" className="text-sm hover:text-purple-300 transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-sm hover:text-purple-300 transition-colors duration-300">
            Terms of Service
          </Link>
          <button className="bg-transparent border-none text-white text-sm hover:text-purple-300 cursor-pointer transition-colors duration-300">
            Cookies Settings
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;