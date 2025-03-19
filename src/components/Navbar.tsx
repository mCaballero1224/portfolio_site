'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

  const navLinks = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: 'https://blog.mcaballero.dev', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <nav>
    </nav>
  );
}

export default Navbar;
