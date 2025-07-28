import * as React from 'react';
import { FluentProvider, webLightTheme, Button } from '@fluentui/react-components';
import { Navigation24Regular } from '@fluentui/react-icons';
import { useState } from 'react';
import styles from './MainLayout.module.css';


export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <FluentProvider theme={webLightTheme}>
      <header className={styles.topNav}>
        <div className={styles.logo}>MyApp</div>
        <nav className={styles.topNavLinks}>
          <Button appearance="subtle" as="a" href="/">Home</Button>
          <Button appearance="subtle" as="a" href="/about">About</Button>
        </nav>
      </header>
      <div className={styles.flexContainer}>
        <aside className={styles.sidebarContainer}>
          <nav>
            <Button as="a" href="/article-1" appearance="subtle" className={styles.sidebarButton}>Article 1</Button>
            <Button as="a" href="/article-2" appearance="subtle" className={styles.sidebarButton}>Article 2</Button>
          </nav>
        </aside>
        <main className={styles.mainContainer}>
          <div className={styles.docContainer}>
            {children}
          </div>
        </main>
      </div>
    </FluentProvider>
  );
}
