import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className='w-12 h-12 rounded-full flex justify-center items-center'
      style={{
        background: '#d0ebff',
        fontSize: 25,
      }}
    >
      👻
    </div>
  );
}
