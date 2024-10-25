
import ReactPlayer from 'react-player';
import { BarChart3, Brain } from 'lucide-react';
import Navbar from './components/navBar';
import ContactForm from './components/contactForm';
import Mainlogo from './assets/logo.png';  


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center text-white">
          <div className="bg-indigo-800/30 inline-px-4 py-2 rounded-full mb-4">
            School → Teachers → Reports
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Powering K12 with new-age SAAS.
          </h1>
          <div className="flex justify-center gap-4 mb-12">
            <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg hover:bg-indigo-100">
              Download the app
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
              Talk to an expert
            </button>
          </div>
          
          {/* Video Player */}
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              width="100%"
              height="500px"
              controls
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl mb-6">
              Trusted by Teachers at over 1,000 of India's leading Schools
            </p>
            <div className="flex justify-center space-x-8">
              {/* School logos would go here */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Features that work for your future.
          </h2>
          <p className="text-white text-center mb-12">
            Check out our amazing features and experience the power of MyEd for your schools.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-800/50 p-8 rounded-lg">
              <BarChart3 className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Reports Dashboard</h3>
              <p className="text-gray-300">
                Our Dashboard provides a clear and detailed interface for you to analyze student performance, track progress, and generate comprehensive graphs to see time data patterns, making data-driven decisions effortless.
              </p>
              <button className="mt-4 text-white hover:underline">View dashboard →</button>
            </div>
            
            <div className="bg-indigo-800/50 p-8 rounded-lg">
              <Brain className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">AI Attendance</h3>
              <p className="text-gray-300">
                Say goodbye to manual attendance taking and tracking. Our AI-powered system automates the process while maintaining accuracy and efficiency.
              </p>
              <button className="mt-4 text-white hover:underline">View integration →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12 px-6">
        <div className="container mx-auto grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p>Work inquiries: MyEd@gmail.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Careers</h3>
            <p>Careers@myedinc.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Address</h3>
            <p>123 Tech Street,<br />Cyber City,<br />IT Junction</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <div className="space-y-2">
              <p>Twitter</p>
              <p>Instagram</p>
              <p>LinkedIn</p>
            </div>
          </div>
            <div className=' flex justify-center items-center'>
              <div className='w-48'>
                <img src={Mainlogo} alt="Main Logo" />
              </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;