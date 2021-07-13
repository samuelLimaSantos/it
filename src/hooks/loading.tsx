import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from 'react';
import { Loading } from '../components/Loading';

type LoadingContextData  = {
  showLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type Props = {
  children: ReactNode;
}

const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

export const LoadingProvider = ({ children }: Props) => {
  const [ showLoading, setShowLoading ] = useState(false);

  return (
    <LoadingContext.Provider value={{ showLoading: setShowLoading }}>
      {children}
      {showLoading && <Loading />}
    </LoadingContext.Provider>
  );
};

export function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useAuth must be used within an LoadingProvider');
  }

  return context;
}