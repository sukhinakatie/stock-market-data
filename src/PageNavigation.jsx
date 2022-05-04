import {Route, Routes} from 'react-router-dom';
import About from './Pages/About';
import Stocks from './Pages/Stocks';
import Quote from './Pages/Quote';
import ErrorPage from './Pages/Errorpage';

const PageNavigation = () =>{
    return(   
        <Routes>
            <Route index element={<About/>}/>
            <Route path='/home' element={<About/>}/>
            <Route path='/stocks' element={<Stocks/>}/>
            <Route path='/quote' element={<Quote/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    );
};

export default PageNavigation;