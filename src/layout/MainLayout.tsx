import * as React from 'react';
import { FluentProvider, webLightTheme, Button, Menu, MenuList, MenuItem } from '@fluentui/react-components';


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <FluentProvider theme={webLightTheme}>
        <nav className="navBar">
            <Menu>
            <MenuList>
                <MenuItem>
                <Button as="a" href="/">Home</Button>
                </MenuItem>
                <MenuItem>
                <Button as="a" href="/about">About</Button>
                </MenuItem>
            </MenuList>
            </Menu>
        </nav>
        <main>{children}</main>
    </FluentProvider>
  );
}
