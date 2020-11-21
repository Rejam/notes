import { StrictMode } from "react";
import "../globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  );
}

export default MyApp;
