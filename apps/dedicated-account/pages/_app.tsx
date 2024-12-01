import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProviders } from '@other_drew/ui';

export default function DashboardTestApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <ThemeProviders>
      <Component {...pageProps} />
    </ThemeProviders>
  );
}