
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import heroBg from '@/assets/hero-bg.jpg';
import { Link } from 'react-router-dom';   

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 lg:py-0">
          
          {/* Left Content */}
          <div className="flex-1 text-white lg:pr-12 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium mb-6">
              Next-Gen POS Solution
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Power Your<br />
              Business with<br />
              Our <span className="text-orange-500">Cloud-Based<br />
              POS</span> System
            </h1>
            
            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Seamless, Scalable, and Secure – Perfect for Retail,<br />
              Restaurants, and More.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/demo">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Demo
                </Button>
              </Link>
              
              <Link to="/features">
                <Button 
                  className="border-2 border-white text-white bg-transparent px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  Explore Features →
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content ... (unchanged) */}

          {/* Right Content - Modern Display */}
          <div className="flex-1 lg:pl-12 mt-12 lg:mt-0 animate-slide-in-right">
            <div className="relative">
              {/* Ultra Modern Display Frame */}
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-2xl border border-gray-700">
                {/* LED Strip Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 animate-pulse"></div>
                
                {/* Screen Container */}
                <div className="relative bg-black rounded-2xl p-1 shadow-inner">
                  {/* Screen Bezel with RGB Effect */}
                  <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl relative overflow-hidden">
                    {/* Holographic Glass Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent via-purple-500/10 to-orange-500/10 rounded-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent rounded-xl"></div>
                    
                    {/* Display Content */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-8 relative z-10 min-h-[320px] border border-slate-700">
                      {/* Header with Glow */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '0.5s'}}></div>
                            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50" style={{animationDelay: '1s'}}></div>
                          </div>
                          <div className="text-xs text-cyan-400 font-mono">LIVE</div>
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-3">
                          Advertisement
                          <br />
                          Display System
                        </h3>
                        <p className="text-slate-300 text-lg leading-relaxed">
                          Dynamic content delivery
                          <br />
                          with real-time analytics
                          <br />
                          and smart targeting
                        </p>
                      </div>
                      
                      {/* Interactive Display Preview */}
                      <div className="relative mb-8">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-lg border border-slate-600">
                          {/* Ad Preview Area */}
                          <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-lg p-4 mb-4 border border-orange-500/30">
                            <div className="flex items-center justify-between mb-3">
                              <div className="h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded w-32 animate-pulse"></div>
                              <div className="text-xs text-orange-400 bg-orange-400/20 px-2 py-1 rounded">AD</div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-3 bg-slate-400/60 rounded w-full animate-pulse"></div>
                              <div className="h-3 bg-slate-400/40 rounded w-4/5 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                              <div className="h-3 bg-slate-400/20 rounded w-3/5 animate-pulse" style={{animationDelay: '1s'}}></div>
                            </div>
                          </div>
                          
                          {/* Analytics Bars */}
                          <div className="grid grid-cols-4 gap-2">
                            <div className="h-12 bg-gradient-to-t from-cyan-500/40 to-cyan-400/60 rounded animate-pulse"></div>
                            <div className="h-8 bg-gradient-to-t from-orange-500/40 to-orange-400/60 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                            <div className="h-16 bg-gradient-to-t from-purple-500/40 to-purple-400/60 rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
                            <div className="h-10 bg-gradient-to-t from-green-500/40 to-green-400/60 rounded animate-pulse" style={{animationDelay: '0.9s'}}></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 text-lg font-semibold rounded-xl mb-4 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
                        onClick={() => {
  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
}}

                      >
                        Launch Display →
                      </Button>
                      
                      {/* Status Indicators */}
                      <div className="flex justify-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                          <span className="text-xs text-slate-400">Online</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/50" style={{animationDelay: '0.5s'}}></div>
                          <span className="text-xs text-slate-400">Broadcasting</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{animationDelay: '1s'}}></div>
                          <span className="text-xs text-slate-400">Analytics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Brand Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    SparkServes 
                  </div>
                </div>
              </div>
              
              {/* Base Stand - Modern */}
              <div className="flex justify-center mt-6">
                <div className="w-24 h-2 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full shadow-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-400/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;
