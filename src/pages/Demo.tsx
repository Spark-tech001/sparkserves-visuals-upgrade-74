import Header from '@/components/Header';
import DemoForm from '@/components/DemoForm';

const Demo = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16 lg:pt-20">
        <DemoForm />
      </div>
    </>
  );
};

export default Demo;