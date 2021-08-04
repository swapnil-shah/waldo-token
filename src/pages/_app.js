// import { AppProps } from 'next/app';

import "../styles/main.css";

const MyApp = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default MyApp;
