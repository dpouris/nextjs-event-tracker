import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import EventContext from "../context/EventContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EventContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </EventContext>
  );
}

export default MyApp;
