import Image from 'next/image';
import Link from 'next/link';

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex flex-col h-screen bg-[url("/bg.svg")]'>
      <Link href='/'>
        <Image
          src='/logo.svg'
          alt='Logo'
          width={180}
          height={60}
          className='m-5 bg-white'
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </Link>
      <main className='flex items-center justify-center flex-1'>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
