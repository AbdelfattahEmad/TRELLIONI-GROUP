import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense, useEffect } from 'react';
import Homepage from './Pages/Home/Homepage';
import {Routes, Route} from "react-router-dom";
import i18n from './i18n';
import About from './Pages/About/About';



function App() {

  const detectLangue = () => {
    const lang = localStorage.getItem('i18nextLng');

    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
      localStorage.setItem('i18nextLng', 'ar');
      i18n.changeLanguage('ar');
    } else if(lang === 'en'){
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      localStorage.setItem('i18nextLng', 'en');
      i18n.changeLanguage('en');
    }else if (lang === 'tr'){
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'tr');
      localStorage.setItem('i18nextLng', 'tr');
      i18n.changeLanguage('tr');
    }
  };

  useEffect(() => {
    detectLangue();
  }, []);

  return (
    <Suspense>
      <Routes>
            <Route index element={<Homepage />} />
            <Route path='/Home' element={<Homepage />} />
            <Route path='/About' element={<About />} />
        </Routes>


      
    </Suspense>





  )
}

export default App
