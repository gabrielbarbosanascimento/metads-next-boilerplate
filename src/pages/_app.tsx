import { AppProps } from 'next/app';
import Head from 'next/head';
import { MetaStyles } from '../../core/metads/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <MetaStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
