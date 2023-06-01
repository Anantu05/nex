import * as React from 'react';

import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo />
      <main className='flex items-center justify-center'>
        <h1>Hi!</h1>
      </main>
    </>
  );
}