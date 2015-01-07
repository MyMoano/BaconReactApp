
var React = require('react');
var cx = require('react/lib/cx');


//actions & stores
var actions = require('../actions/storeActions');
var TimelinesStores = require('../stores/timelinesStores');
var TimelinesServices = require('../services/timelinesServices');
var StoreUpdate = require('../stores/storeUpdate');


//style import
var Style = require('../styles/styles');

//util -----------------------------
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


//First Event
var ActiveEvent = React.createClass({
	
    getInitialState: function() {
        return { 
        	id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
        	hours: (addZero(new Date().getHours()) +':'+addZero(new Date().getMinutes())),
	    	isCall: (this.props.event.type === 'Call'?true:false),
	        isAppointment:(this.props.event.type === 'Appointment'?true:false),
	        isTravel:(this.props.event.type === 'Travel'?true:false),
	        isMeeting:(this.props.event.type === 'Meeting'?true:false)
       };
    },
    
    _onClickPause:function()	{
    	actions.eventlinePause.push({id: this.props.event.id});
    },
    
    _onClickOk:function()	{
    	actions.eventlineOk.push({id : this.props.event.id});
    },    
    
    render: function() {
        var self = this;   
        return (
                <article className="timeline-item active">
                <div className="timeline-caption">
                  <div className="panel bg bg-primary">
                    <span className="timeline-icon"><i className="icon-bell-alt time-icon bg-primary"></i></span>
                    <span className="timeline-date">  {this.props.event.date}</span>
                    <h5>
                      <span>{this.props.event.title}</span>
                      {this.props.event.contact}
                    </h5>
                    <div className="m-t-small timeline-action">
                      <span className="h3 pull-left m-r-small">{this.state.hours}</span>
                      <button className="btn btn-sm btn-white" onClick={self._onClickPause} ><i className="icon-pause"></i> Pause</button>
                      <button className="btn btn-sm btn-white" onClick={self._onClickOk} ><i className="icon-ok"></i> Confirm</button>
                    </div>
                  </div>
                </div>
            </article>   
        );
    }    
       
});



//single Event
var Event = React.createClass({

	getDefaultProps: function() {
	    return {
	    	isArrowRight:true    	
	    };
	},
	
    getInitialState: function(){
        return { 
        	id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
	    	isCall: (this.props.event.type === 'Call'?true:false),
	        isAppointment:(this.props.event.type === 'Appointment'?true:false),
	        isTravel:(this.props.event.type === 'Travel'?true:false),
	        isMeeting:(this.props.event.type === 'Meeting'?true:false),
	        isProject:(this.props.event.type === 'Project'?true:false)
       };
    },
    
    _onClick:function()	{
    	//actions.weatherRefresh.push({});
    },
    
    render: function() {
        var self = this;   
        
        var styleEventArticle = cx({  
        	'timeline-item': true,
        	'alt': this.props.isArrowRight
        }); 
        
        var styleEventicon = cx({  
        	'time-icon': true,
        	'icon-mobile-phone': this.state.isCall,
        	'icon-male': this.state.isAppointment,
        	'icon-plane': this.state.isTravel,
        	'icon-file-text': this.state.isMeeting,
        	'icon-code': this.state.isProject,
        	'bg-info': this.state.isMeeting,
        	'bg-success': this.state.isAppointment,
        	'bg-primary':this.state.isCall
        }); 
        
        var styleEventArrow = cx({  
        	'panel': true,
        	'arrow': true,
        	'arrow-right': this.props.isArrowRight,
        	'arrow-left': (!this.props.isArrowRight)
        }); 
        
        return (
            <article className={styleEventArticle}>
            <div className="timeline-caption">
              <div className={styleEventArrow}>
                <span className="timeline-icon"><i className={styleEventicon}></i></span>
                <span className="timeline-date">{this.props.event.date}</span>
                <h5>
                  <span>{this.props.event.title}</span>
                  {this.props.event.contact}
                </h5>
                <p>{this.props.event.content}</p>
                <h5>
                	<img src={this.props.event.thumbnail} className="thumb-large" alt={this.props.event.thumbnail} />
                </h5>                
              </div>
            </div>
            </article>
        );
    }    
  
});


//create class - timelines component
var Timelines = React.createClass({
	mixins: [StoreUpdate], 				// Use the mixin
	getDefaultProps: function() {
	    return {
	    	format: 'french'
	    };
	},
	
    getInitialState: function(){
        return { 
        	id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
        	events: TimelinesStores.getAll()
       };
    },
    
    // Add change listeners to stores
    componentDidMount: function() {
    	this.AddUpdateListener(TimelinesStores, this._onChange);
    	actions.timelinesRefresh.push({});
    },

    // Remove change listeners from stores
    componentWillUnmount: function() {
    	this.RemoveUpdateListener(TimelinesStores, null); 	    	
    }, 	 
    
    _onClick:function()	{
    	actions.timelinesPlus.push({});
    },
    
    render: function() {
        var self = this;   
        var events = this.state.events;
    	var flipflap = false;
        var Events = Object.keys(events).map(function(key) {
        	flipflap = !flipflap;
        	if(events[key].actived) {
        		return <ActiveEvent event={events[key]}  />;
        	} else {
        		return <Event event={events[key]} isArrowRight={flipflap} />;
        	}
        });       
        return (
                <div className="timeline">
                	{Events}
                	<div className="timeline-footer">
                		<a href="#" onClick={self._onClick}>
                		<i className="icon-plus time-icon inline-block bg-default"></i>
                		</a>
                	</div>
                </div>
        );
    },    
       
    //listeners to stores
    _onChange: function() {
    	this.setState({events: TimelinesStores.getAll()});
      }
  
});




module.exports = Timelines;
