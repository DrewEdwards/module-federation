import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
export function ThemeProviders(props) {
    const { theme, children } = props;
    return _jsx(_Fragment, { children: _jsxs(AppCacheProvider, Object.assign({}, props, { children: [_jsx(Head, { children: _jsx("meta", { name: "viewport", content: "initial-scale=1, width=device-width" }) }), _jsxs(ThemeProvider, Object.assign({ theme: theme }, { children: [_jsx(CssBaseline, {}), children] }))] })) });
}
