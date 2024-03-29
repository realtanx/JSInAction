import React from 'react';
import { AppContainer } from './styles';
import { Column } from './components/Column';
import { AddNewItem } from './components/AddNewItem';

export const App = () => {
  return (
    <AppContainer>
      <Column title='todo-column'></Column>
      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={console.log}
      />
    </AppContainer>
  );
}

export default App;
