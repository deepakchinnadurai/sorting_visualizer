
import './Node.css';
import React,{ Component,useState } from 'react'
import {sorting} from './sorting';

export class Node extends Component{	
render(){
    
	return (
	<div>
	<div className="mymove"
    
	style={{backgroundColor:this.props.bg,
				width:this.props.color}}
	></div>
	
	 </div>
	)
	
}
}

 export default Node;
