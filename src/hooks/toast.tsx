import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
  useEffect
} from 'react';
import { Toast } from '../components/Toast';

type ToastContextData  = {
  showToast: (info: ToastInfo) => void;
}

type Props = {
  children: ReactNode;
}

export type ToastInfo = {
  show: boolean;
  type: 'error' | 'success';
  message: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider = ({ children }: Props) => {
  const [ showToast, setShowToast ] = useState<ToastInfo>({} as ToastInfo);

  const handleShowToast = ({message, type, show }: ToastInfo) => {
    setShowToast({ message, type, show });
  };

  return (
    <ToastContext.Provider value={{ showToast: handleShowToast }}>
      {children}
      {showToast.show === true && <Toast message={showToast.message} type={showToast.type} showToast={setShowToast}/>}
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useAuth must be used within an LoadingProvider');
  }

  return context;
}