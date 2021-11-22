import { AppProps } from 'next/app'
import './styles/globals.css';
import {ThemeProvider} from '../context/themeContext';

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
