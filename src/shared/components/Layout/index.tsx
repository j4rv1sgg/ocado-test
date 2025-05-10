import type { ReactNode } from 'react';
import { Link } from 'react-router-dom'
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to='/'>Główna</Link>
          <Link to='/cart'>Koszyk</Link>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};