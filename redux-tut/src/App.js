import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/Store';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Score from './Components/Score';
import Popular from './Components/Popular';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Entry from './Components/Entry';


function App() {
  return (
    
    <Provider store={store}>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Entry />}></Route>
        <Route path='/dashboard' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/score' element={<Score />}></Route>
        <Route path='/popular' element={<Popular />}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import ParentComponent from './ParentComponent';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <ParentComponent />
//     </Provider>
//   );
// };

// export default App;