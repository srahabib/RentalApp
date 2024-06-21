
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
      <Link href="/DashAdmin" >
        <span className="inline-flex items-center justify-center h-20 w-full bg-green1 hover:bg-green2 focus:bg-green2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="h-12 w-14">
            <title>logo</title>
            <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        </span>
      </Link>
    );
};

export default Logo;



