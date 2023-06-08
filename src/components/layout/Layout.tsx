import * as React from 'react';

import Player from '@/components/layout/Player';
import Sidebar from '@/components/layout/sidebar/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='text-alt flex h-screen flex-col bg-[#1D2123]'>
      <div className='flex flex-grow'>
        <Sidebar className='w-[5%]' />
        <div className='flex-grow outline outline-2 outline-blue-500'>
          {children}
        </div>
      </div>
      <Player className='h-[10%] outline outline-2 outline-red-500' />
    </div>
  );
}
