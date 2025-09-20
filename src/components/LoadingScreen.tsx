import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import sparkServesLogo from '@/assets/sparkserves-logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 200); // Small delay after reaching 100%
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-muted/30 to-background z-50 flex flex-col items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl px-6">
        {/* Logo */}
        <div className="mb-8 animate-scale-in">
          <img 
            src={sparkServesLogo} 
            alt="SparkServes Logo" 
            className="h-16 w-auto mx-auto mb-6 animate-pulse-glow"
          />
        </div>

        {/* Company Explanation */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Welcome to{' '}
            <span className="text-primary">SparkServes</span>
          </h1>
        </div>

        {/* Loading Progress */}
        <div className="w-full max-w-md mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="mb-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Loading your experience</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress 
              value={progress} 
              className="h-2 bg-muted"
            />
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
