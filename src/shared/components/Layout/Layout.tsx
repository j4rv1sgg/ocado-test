import type { ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="/">Main</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};