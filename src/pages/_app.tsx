import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> About Myself | Hirsun HAN</title>
        <link rel="manifest" href="/myself/manifest.json" />
        <meta name="application-name" content="Hirsun's Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Hirsun's Portfolio"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="baidu-site-verification" content="codeva-a05qwHvmi1" />
        <meta name="keywords" content="Hirsun HAN, 韩佳明, HANJIAMING" />
        <meta
          name="description"
          content="Hi, I'm Hirsun HAN, from Hong Kong."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
