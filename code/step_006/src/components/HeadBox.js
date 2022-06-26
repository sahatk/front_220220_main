// HeadBox.js

import './PageTitle';
import './HeadBox.css';
import PageTitle from './PageTitle';
import Navigation from './template/Navigation';

function HeadBox(){
    return (
        <header id="HeadBox">
          <div className="container">
            <PageTitle />
            <Navigation />
          </div>
        </header>
    );
}

export default HeadBox;