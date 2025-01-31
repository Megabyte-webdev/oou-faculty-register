import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { onSuccess } from '../utils/notifications/OnSuccess';
import { onFailure } from '../utils/notifications/OnFailure';

interface NetworkStatusContextProviderProps {
  children: ReactNode;
}

export const NetworkStatusContext = createContext<string>('');

export const NetworkStatusContextProvider: React.FC<NetworkStatusContextProviderProps> = ({ children }) => {
  const [status, setStatus] = useState(navigator.onLine ? 'online' : 'offline');

  useEffect(() => {
    const handleOnline = () => {
      setStatus('online');
      onSuccess({
        message: 'Network Status', 
        success: 'Internet Connectivity is up'});
    };

    const handleOffline = () => {
      setStatus('offline');
      onFailure({
        message: 'Network error',
        error:'Internet Connectivity is down'});
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <NetworkStatusContext.Provider value={status}>
      {children}
    </NetworkStatusContext.Provider>
  );
};
