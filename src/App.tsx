import React,{ useState } from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { Dashboard } from './components/Dashboard';
import { TransactionProvider } from './hooks/useTransactions';
import { NewTransactionModal } from './components/NewTransactionModal';
import {ThemeProvider} from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { createGlobalStyle } from 'styled-components'
import usePersisterdState from './utils/usePersistedState'



export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  const [theme, setTheme] = usePersisterdState('theme' ,light);

  function toggleTheme(){
    setTheme(theme.title == 'light' ? dark : light )
  }

  return (
    
    <TransactionProvider>
      <ThemeProvider theme={theme}>
      <Header
       onOpenNewTransactionModal={ handleOpenNewTransactionModal } 
       toggleTheme={toggleTheme}
       />
      <Dashboard />
      <NewTransactionModal 
        isOpen={ isNewTransactionModalOpen }
        onRequestClose = { handleCloseNewTransactionModal }
      />
      <GlobalStyle />
    </ThemeProvider>
    </TransactionProvider>
  );
}


