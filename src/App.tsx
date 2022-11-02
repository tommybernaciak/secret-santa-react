import { FC } from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { PageContextProvider } from './context/PageContext';

const App: FC = () => {
  return (
    <PageContextProvider>
      <div className="antialiased text-gray-800 bg-gradient-to-b from-red-100 to-red-600 w-full flex flex-col items-center justify-between min-h-screen">
        <Header />
        <Content />
        <Footer />
      </div>
    </PageContextProvider>
  );
};

export default App;
