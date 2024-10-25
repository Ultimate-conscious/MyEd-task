import { Rocket } from 'lucide-react';
import Mainlogo from '../assets/logo.png';  

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-indigo-700 text-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            <div className='w-32 h-10 hover:cursor-pointer'>
                <img src={Mainlogo} alt="Main Logo" />
            </div>
          {/* <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8" />
            <span className="text-2xl font-bold">MyEd</span>
          </div> */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-indigo-200">
              Features
            </a>
            <a href="#pricing" className="hover:text-indigo-200">
              Pricing
            </a>
            <a href="#about" className="hover:text-indigo-200">
              About us
            </a>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-lg bg-white text-indigo-700 hover:bg-indigo-100">
              Download the app
            </button>
            <button className="px-4 py-2 rounded-lg border border-white hover:bg-indigo-600">
              Talk to an expert
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
