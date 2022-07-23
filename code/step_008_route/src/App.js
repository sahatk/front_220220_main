import { Routes as RoutesWrap , Route, Link, NavLink } from 'react-router-dom';
import './App.scss';
import MainContent from './Pages/MainContent';
import AboutContent from './Pages/AboutContent';
import AboutDetail from './Pages/AboutDetail';

import ProductContent from './Pages/ProductContent';
import GalleryContent from './Pages/GalleryContent';
import EventContent from './Pages/EventContent';
import ErrorContent from './Pages/ErrorContent';

function App() {
  return (

      <div className="App">
      <header id='headBox'>
        <h1><Link to="/">site name</Link></h1>
        <nav className='gnb'>
          <ul>
            <li><NavLink className={({isActive})=> ' link ' + (isActive ? 'on':'active')} to="about">about</NavLink></li>
            <li><NavLink className={({isActive})=>isActive ? 'link on':'link active'} to="product">product</NavLink></li>
            <li><NavLink className={({isActive})=>isActive ? 'link on':'link active'} to="gallery">gallery</NavLink></li>
            <li><NavLink className={({isActive})=>isActive ? 'link on':'link active'} to="event">event</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
          <RoutesWrap>
            <Route path="/" element={<MainContent />}></Route>
            <Route path="about" element={<AboutContent />}></Route>

            <Route path="product" element={<ProductContent />}></Route>
            <Route path='product/about' element={<AboutDetail/>}></Route>

            <Route path="gallery" element={<GalleryContent />}></Route>
            <Route path="event" element={<EventContent />}></Route>
            <Route path="*" element={<ErrorContent/>}></Route>
            {/* <MainContent />
            <AboutContent/>
            <ProductContent/>
            <GalleryContent/>
            <EventContent/> */}
          </RoutesWrap>
      </main>
      <footer id='footBox'>
        footer
      </footer>
      </div>
    
  );
}

export default App;
