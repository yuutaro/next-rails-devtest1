import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import * as React from 'react'
import '@/styles/destyle.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
