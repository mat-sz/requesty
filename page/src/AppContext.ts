import React from 'react';

import { AppContextType } from './types/ContextState';

// Initial value will be set in App.
export const AppContext = React.createContext<AppContextType>(undefined as any);
