
var React = require('react');
var cx = require('react/lib/cx');

//actions & stores
var StoreActions = require('../actions/storeActions');
var WeatherStores = require('../stores/weatherStores');
var WeatherServices = require('../services/weatherServices');
var StoreUpdate = require('../stores/storeUpdate');

//style import
var Styles = require('../styles/styles').styleWeather;

//Actions


//create class
var Weather = React.createClass({
	mixins: [StoreUpdate],
	getDefaultProps: function() {
	    return {
	    	isDegree: true,
	    	round:1
	    };
	},
	
    getInitialState: function(){
        return { 
        	id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
    		weather: WeatherStores.getAll()
       };
    },
    
    // Add change listeners to stores
    componentDidMount: function() {
    	WeatherServices.loadDataFromServer();
    	this.AddUpdateListener(WeatherStores, this._onChange);
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    	this.RemoveUpdateListener(WeatherStores, this._onChange); 	
    }, 	 
    
    _onClick:function()	{
    	StoreActions.weatherRefresh.push({header: 'weather_refresh'});
    },
    
    convertDegree: function(fahrenheit)	{
        var cursor = Math.pow(10, this.props.round);
        return Math.round( ((fahrenheit-160)/9)*cursor )/cursor;
    },
    
    findIcon: function() {
       if(this.state.weather.icon === 'clear sky' )	return 'img/weather/01d.png';
       if(this.state.weather.icon === 'few clouds' ) return 'img/weather/03d.png';
 	   return 'img/weather/01d.png';
    },

    render: function() {
        var self = this;   
        return (
        		 <section className={Styles.section}>
	                 <div className={Styles.body}>
	                   <a className={Styles.shapeIcon}><img src={this.findIcon()}  onClick={self._onClick} /></a>
	                   <div className={Styles.city} >{this.state.weather.city}</div>
	                   <div className={Styles.space}></div>
	                   <div className={Styles.temp}><strong>{this.props.isDegree?self.convertDegree(this.state.weather.temp):this.state.weather.temp}</strong></div>
	                   <div className={Styles.wind}>Wind {this.state.weather.wind}</div>
	                 </div>
               </section>	
        );
    },    
       
    //listeners to stores
    _onChange: function() {
    	this.setState({weather: WeatherStores.getAll()});
    	console.log("Weather > _onChange");
      }    
  
});




module.exports = Weather;
