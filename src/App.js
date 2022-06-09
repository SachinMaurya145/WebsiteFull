import './App.css';
import Navbar from './Components/Navbar';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser'; 
import AllUsers from './Components/AllUsers';
import CodeForInterview from './Components/Codeforinterview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
  
      <Navbar />
      <Routes>
        <Route path='/' element={<CodeForInterview />} />
        <Route path='/AllUsers' element={<AllUsers />} />
        <Route path='/AddUser' element={<AddUser />} />
        <Route path='/EditUser/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
