import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface ThemeProviderProps extends AppProps {
  appProps: any,
  theme: any,
  children: React.Component
}

export function ThemeProviders(props: any) {
  const { theme, children } = props;

  return <>
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppCacheProvider>
  </>
}