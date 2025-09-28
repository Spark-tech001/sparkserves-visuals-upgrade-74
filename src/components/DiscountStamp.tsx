import { useState, useEffect } from 'react';

const DiscountStamp = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-09-22T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setIsExpired(true);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isExpired) {
    return null;
  }

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="absolute inset-x-0 z-20 flex justify-center" style={{ top: '95px' }}>
      <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
        {/* Stamp Background */}
        <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white px-6 py-3 shadow-2xl border-2 border-dashed border-red-300 relative overflow-hidden">
          {/* Stamp Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1 left-1 w-2 h-2 border border-white rounded-full"></div>
            <div className="absolute top-1 right-1 w-2 h-2 border border-white rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 border border-white rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border border-white rounded-full"></div>
          </div>
          
          {/* Content */}
          <div className="text-center relative z-10">
            <div className="text-xl font-extrabold mb-1 tracking-wide">50% OFF</div>
            <div className="text-sm font-medium mb-2 opacity-90">Limited Time!</div>
            
            {/* Countdown */}
            <div className="mb-1">
              <div className="text-sm font-bold">
                {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
              </div>
            </div>
            
            <div className="text-xs font-medium opacity-90">
              Sept 21, 2025
            </div>
          </div>
          
          {/* Stamp Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
        </div>
        
        {/* Shadow */}
        <div className="absolute inset-0 bg-red-600/30 transform translate-x-1 translate-y-1 -z-10"></div>
      </div>
    </div>
  );
};

export default DiscountStamp;