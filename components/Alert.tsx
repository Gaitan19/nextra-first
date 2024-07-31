import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AlertMessage {
  info: (text: string, options?: ToastOptions) => void;
  success: (text: string, options?: ToastOptions) => void;
  warning: (text: string, options?: ToastOptions) => void;
  error: (text: string, options?: ToastOptions) => void;
  default: (text: string, options?: ToastOptions) => void;
}

const alertMessage: AlertMessage = {
  info: (text: string, options?: ToastOptions) => toast.info(text, options),
  success: (text: string, options?: ToastOptions) =>
    toast.success(text, options),
  warning: (text: string, options?: ToastOptions) =>
    toast.warning(text, options),
  error: (text: string, options?: ToastOptions) => toast.error(text, options),
  default: (text: string, options?: ToastOptions) => toast(text, options),
};

const Alert = () => {
  return (
    <ToastContainer
      position="top-left"
      autoClose={3000}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      theme="light"
    />
  );
};

export { Alert, alertMessage };
