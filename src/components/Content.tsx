import { FC, useContext } from 'react';
import { PageContext } from '../context/PageContext';
import Banner from './Banner';
import StartPage from './StartPage';

const Content: FC = () => {
  const { page } = useContext(PageContext);
  return (
    <div className="flex flex-col md:flex-row w-full px-8 justify-between">
      <Banner />
      {page === 'start' && <StartPage />}
      <Banner />
    </div>
  );
};

export default Content;
