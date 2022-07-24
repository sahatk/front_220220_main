import Header from './Component/Common/Header';
import Contents from './Component/Common/Contents';
import Footer from './Component/Common/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Contents></Contents>
      <Footer></Footer>
    </div>
  );
}


// const Headers = styled.a`
//   display:block;
//   width:100%;
//   height:100px;
//   background-color:#ddd;
// `;

export default App;
