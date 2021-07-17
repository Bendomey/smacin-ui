import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "nprogress/nprogress.css";

import nProgress from "nprogress";
import router from "next/router";

import type { AppProps } from "next/app";

nProgress.configure({
  showSpinner: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

router.events.on("routeChangeStart", () => nProgress.start());
router.events.on("routeChangeComplete", () => nProgress.done());
export default MyApp;
