
import * as React from 'react';
import { StaticRouter } from 'react-router';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import { FluentProvider, webLightTheme, SSRProvider } from '@fluentui/react-components';
import { RendererProvider } from '@griffel/react';

export function render(url: string, renderer: any) {
  return (
    <SSRProvider>
      <RendererProvider renderer={renderer}>
        <FluentProvider theme={webLightTheme}>
          <StaticRouter location={url}>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </MainLayout>
          </StaticRouter>
        </FluentProvider>
      </RendererProvider>
    </SSRProvider>
  );
}
