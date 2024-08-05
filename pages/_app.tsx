// pages/_app.tsx
import '../assets/styles/globals.css'; // Importa el CSS global
import { Alert } from '../components/Alert';
import 'react-toastify/dist/ReactToastify.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Alert />
    </>
  );
}

export default MyApp;
