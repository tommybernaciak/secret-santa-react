import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-white">
      <p className="order-2 md:order-1 mt-8 md:mt-0"> created by Tommy Bernaciak </p>
      <div className="order-1 md:order-2">
        <span className="px-2">About us</span>
        <span className="px-2 border-l">Contact us</span>
        <span className="px-2 border-l">Privacy Policy</span>
      </div>
    </div>
  );
};

export default Footer;
