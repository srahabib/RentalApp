import React from 'react';
import Image from "next/image";
// import { useRouter } from "next/navigation";

const Logo = () => {
//   const router = useRouter();

  return ( 
    <Image
    //   onClick={() => router.push('/')}
      className="md:block cursor-pointer" 
      src="/images/rentorLogo4white.png" 
      height="100" 
      width="100" 
      alt="Logo" 
    />
   );
}
 
export default Logo;