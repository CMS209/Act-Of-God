import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Act of God</h1>
      <p>This is a test website for the Act of God clothing brand.</p>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/shop">Shop</Link> | 
        <Link href="/about">About Us</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Home;
