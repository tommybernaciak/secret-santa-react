import { FC } from 'react';
import MainButton from './buttons/MainButton';

const StartPage: FC = () => {
  return (
    <div className="h-12 px-1 py-1 border-t border-red-100 bg-white">
      <MainButton />
    </div>
  );
};

export default StartPage;
