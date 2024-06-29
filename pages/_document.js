//_document.js file in a Next.js application allows you to customize the initial HTML document used for
// server-rendering. This is an advanced customization that is typically used for enhancing SEO, adding external stylesheets,
// or including scripts that should be loaded globally.
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add meta tags, external stylesheets, or other elements */}
          <meta name="description" content="Custom Next.js application" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
