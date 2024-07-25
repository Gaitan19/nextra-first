// pages/_app.tsx
import '../assets/styles/globals.css'; // Importa el CSS global

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
