import React from 'react';
import image from './Logo.png'
import image2 from './disneygif.gif'


class Home extends React.Component {
  render(){
  	return (
  	<div id="content">
  		  <img className="gif" src={image2} alt="Disney gif"/>
   		 <div className="Home">
      		<h1>Curious about what's accessible on Disney+?</h1>
      		<img className="logo" src={image} alt="Disney Logo"/>
      		<h2>Look up Movies, Characters, Locations and More!</h2>
    	 </div>
    
    	 <div className="Homebot">
    		<h1>What is this?</h1>
    		<h4>This API is an accessible data source for all Disney related content.</h4>
    		<h1>How can I use it?</h1>
    		<h4>Consult with our documentation in order to get started.</h4>
    		<h1>Show support @Venmo "Joshua-Cura" :D</h1>
    	 </div>
    </div>
    );
  }
}

export default Home;
