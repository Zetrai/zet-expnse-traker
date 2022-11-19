import { Routes, Route } from 'react-router-dom';

import NavBar from './routes/nav-bar/nav-bar.component';

import MyExpense from './routes/my-expenses/my-expenses.component';
import MyIncome from './routes/my-income/my-income.component';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<MyExpense />} />
        <Route path='my-income' element={<MyIncome />} />+
      </Route>
    </Routes>
  );
};

export default App;
