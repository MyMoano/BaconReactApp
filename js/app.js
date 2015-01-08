/**
 * New node file 
 * 
 */

//Components dependencies -------
var React = require('react');
var Bacon = require('baconjs');

//components 
var Weather = require('./components/weather');
var Timelines = require('./components/timelines');


//service
var WeatherServices= require('./services/weatherServices');

//constant

//panel
var PanelFollower = React.createClass({
	
    // Add change listeners to stores
    componentDidMount: function() {
    },

    // Remove change listers from stores
    componentWillUnmount: function() {
    },

    render: function() {
        var self = this;
        return (
	      	 <div className="row">
	      		<div className="col-lg-6">
        		 	<Weather />
        		 </div>
 	      		<div className="col-lg-6">
	      			<Timelines />		
	      		</div>
            </div>	
        );
    }   
         
});



// Render FluxCartApp Controller View
React.render(
  <PanelFollower />,
  document.getElementById('flux-tag')
);
