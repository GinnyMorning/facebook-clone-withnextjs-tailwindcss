import React from 'react';
import "../styles/globals.css";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    // include session to page authentication from nextjs client
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
