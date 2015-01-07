/*
 * STYLE
 * COMPONENTS
 * 
 */
var React = require('react');
var cx = require('react/lib/cx');

//class definition --- Weather Component
var styleWeather = {
	section: 	cx({  'panel': true, 'text-center': true }),
	body: 		cx({  'panel-body': true }),
	shapeIcon: 	cx({  'btn': true, 'btn-circle': true, 'btn-lg': true }),
	city: 		cx({  'h4': true }),
	space:		cx({  'line': true, 'm-l m-r': true }),
	temp:		cx({  'line': true, 'm-l m-r': true }),
	wind:		cx({  'small': true })
}


//class definition --- Forms Component
var styleForms = {
		
	panel: 		cx({  'form-signin': true }),
	header: 	cx({  'form-signin-heading': true }),	
	checkbox:	cx({  'checkbox': true }),
	label:		cx({  'checkbox-custom': true }),
	text: 		cx({  'form-control': true })
}


module.exports.styleWeather = styleWeather;
module.exports.styleForms = styleForms;