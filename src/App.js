
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/FooterMain';
import Header from './components/Header/HeaderMain';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/SidebarMain';



function App() {
  const [searchTerm, setSearchTerm] = useState ('');
  return (
    <div>
      <Header onSearch = {setSearchTerm}/>
      <Sidebar/>
      <Main searchTerm = {searchTerm}/>
      <Footer/>
      
    </div>
  );
}

export default App;
