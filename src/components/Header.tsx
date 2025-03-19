import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/Loading';
import { Suspense } from 'react';

const Header = () => {
  return (
    <header
      className="flex flex-row py-4 shadow-lg bg-gray-900"
    >
      <div
        id="header-link-container container"
        className=""
      >
        <Link
          href="/home"
          id="header-link"
          className="flex flex-row group"
        >
          <div
            id="header-image-container"
            className=""
          >
            <Image
              src="/android-chrome-192x192.png"
              id="favicon-header"
              height={54}
              width={54}
              alt="Favicon with the initials MC"
              className="border-gray-900 border-3 rounded-lg mx-2 my-auto shadow-md group-hover:border-lime-400"
            />
          </div>
          <div
            id="header-title-container"
            className="flex flex-col justify-center text-white"
          >
            <h1
              id="title-name"
              className="text-2xl my-auto font-bold group-hover:text-lime-400"
            >
              Michael Caballero
            </h1>
            <div>
              <Suspense 
                fallback={<Loading />}
              >
              </Suspense>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
