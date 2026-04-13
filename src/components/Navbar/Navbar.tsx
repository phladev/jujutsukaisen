'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/personagens', label: 'Personagens' },
  { href: '/historia', label: 'História' },
  { href: '/autor', label: 'Autor' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header>
      <nav>
        <Link className="logo" href="/" onClick={closeMenu}>
          BLOGJK
        </Link>

        <button
          className={`mobile-menu-btn${isOpen ? ' active' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="nav-list"
        >
          <span className="hamburger-line line1" />
          <span className="hamburger-line line2" />
          <span className="hamburger-line line3" />
        </button>

        <ul
          id="nav-list"
          className={`nav-list${isOpen ? ' active' : ''}`}
          role="list"
        >
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <li
                key={link.href}
                style={
                  isOpen
                    ? {
                        animation: `navLinkFade 0.5s ease forwards`,
                        animationDelay: `${index / 7 + 0.3}s`,
                      }
                    : undefined
                }
              >
                <Link
                  href={link.href}
                  className={styles.navLink}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
