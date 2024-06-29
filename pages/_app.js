// _app.js
// This is the custom App component for the entire application.
// It wraps every page with common layout or functionality.

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
