import { StringsProvider } from 'providers/stringsProviderContext';
import { UserProvider } from 'providers/userProviderContext';
import './App.css';
import React, { createRef } from 'react';

import AppRoutes from 'routes/AppRoutes';
import { NotificationProvider } from 'providers/notifyContextProvider';
export const ref = createRef();
function App() {
  return (
    <NotificationProvider>
      <StringsProvider>
        <UserProvider>
          <div ref={ref}>
            <AppRoutes />
          </div>
        </UserProvider>
      </StringsProvider>
    </NotificationProvider>
  );
}

export default App;
