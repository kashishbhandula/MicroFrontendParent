// __document.js

import { revalidate } from "@module-federation/nextjs-mf/utils";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    if (ctx?.pathname && !ctx?.pathname?.endsWith("_error")) {
      await revalidate().then((shouldUpdate) => {
        if (shouldUpdate) {
          console.log("Hot Module Replacement (HMR) activated", shouldUpdate);
        }
      });
    }

    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
