import { Routes, Route } from 'react-router-dom';

import NavBar from './routes/nav-bar/nav-bar.component';

import Home from './routes/home/home.component';
import Transactions from './routes/transactions/transactions.component';
import Stats from './routes/stats/stats.component';
import Profile from './routes/profile/profile.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='transactions' element={<Transactions />} />+
        <Route path='stats' element={<Stats />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
