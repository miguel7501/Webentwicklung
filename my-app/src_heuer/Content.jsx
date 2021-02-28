import {Route, NavLink, Switch} from 'react-router-dom';
import Hero from './Hero/Hero';
import FourInformation from './FourInformation/FourInformation';
import PictureAndText from './PictureAndText/PictureAndText';
import React, {useState} from 'react';
const Content = () => {
const [data, setData] = useState('abcde');
    return (<div className="App">
      <header className="App-header">
            <NavLink to="/">home</NavLink>
            <NavLink to="/picture">Picture</NavLink>
      </header>
      <Hero />
      <Switch>
          <Route path="/" exact component={(props) => <FourInformation {...props} propdata={data} clickHandler={setData}/>}/>
            <Route path="/picture" exact component={(props) => <PictureAndText  {...props} propdata={data} clickHandler={setData}/>} />
    </Switch>
    </div>);
}

export default Content;