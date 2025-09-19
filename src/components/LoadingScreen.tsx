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
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your ultimate cloud-based POS solution designed to revolutionize restaurant and retail operations. 
            From seamless table management to instant billing, we empower businesses with cutting-edge technology 
            that scales with your growth.
          </p>
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
          
          {/* Loading Text */}
          <p className="text-sm text-muted-foreground animate-pulse">
            Preparing your dashboard...
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-3 gap-4 mt-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-xs text-muted-foreground">Lightning Fast</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="text-xs text-muted-foreground">Secure</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-xs text-muted-foreground">Smart Analytics</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;