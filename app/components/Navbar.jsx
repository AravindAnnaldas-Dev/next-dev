'use client';

import React from 'react';
import '../globals.css';
import Image from 'next/image';
import NavLogo from '../../public/amazon.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="next-section header">
      <div className="next-container">
        <div className="next-wrapper flex-row bg-color">
          <div className="navbar-logo-ctn">
            <Link href="/">
              <Image
                className="navbar-logo"
                src={NavLogo}
                alt="amazon-logo"
                loading="eager"
              />
            </Link>
          </div>
          <div className="navbar-menu-ctn">
            <ul>
              <li className={pathname == '/about' ? 'current-page' : ''}>
                <Link href="/about">About</Link>
              </li>
              <li className={pathname == '/contact' ? 'current-page' : ''}>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={pathname == '/products' ? 'current-page' : ''}>
                <Link href="/products">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
