import { Routes, Route } from 'react-router-dom';

import NavBar from './routes/nav-bar/nav-bar.component';

import MyExpense from './routes/my-expenses/my-expenses.component';
import MyIncome from './routes/my-income/my-income.component';

import { AppContainer } from './App.styles.jsx';

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<MyExpense />} />
          <Route path='my-income' element={<MyIncome />} />+
        </Route>
      </Routes>
    </AppContainer>
  );
};

export default App;
