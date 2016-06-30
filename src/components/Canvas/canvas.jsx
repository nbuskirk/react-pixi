import React, { Component, PropTypes } from 'react'
//import {render} from 'react-dom'//die!
import PIXI from 'pixi.js'

export default class Canvas extends Component {

  static propTypes: {
    zoomLevel: PropTypes.number.isRequired
  }
  constructor( props ) {
    super(props)
    this.animate = this.animate.bind(this);
  }
  componentDidMount(){
    this.renderer = PIXI.autoDetectRenderer(window.innerWidth,window.innerHeight);
    this.refs.gameCanvas.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();
    this.stage.width = window.innerWidth;
    this.stage.height = window.innerHeight;
    this.count = 0;
    var length = window.innerWidth;
    this.points = [];
    for(var i = 0; i < 20; i++){
      var segSize = length;
      this.points.push(new PIXI.Point(i * length,0));
    };
    this.snake = new PIXI.mesh.Rope(PIXI.Texture.fromImage('./src/components/canvas/snake.png'), this.points);
    this.snake.x = window.innerWidth/2-(window.innerWidth/2);
    this.snake.y = window.innerHeight/2;
	  this.stage.position.x = 0;
	  this.stage.position.y = 0;
  	this.stage.scale.set( window.innerWidth / 1500);
    this.text1 = new PIXI.Text('I AM SNAKE!',{strokeThickness:5, stroke: 0x000000, font : '65px Arial', fill : 'orange', align : 'center'});
    this.stage.addChild(this.snake);
    this.stage.addChild(this.text1);
    this.animate();
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.zoomLevel != this.props.zoomLevel;
  }
  componentWillReceiveProps(nextProps){
    this.updateZoomLevel(nextProps);
  }
  updateZoomLevel(props){
    this.stage.scale.x = props.zoomLevel;
    this.stage.scale.y = props.zoomLevel;
  }
  render(){
    return (
      <div className="game-canvas-container" ref="gameCanvas"></div>
    )
  }
  animate(){
    this.count += 0.1;
		var length = 918 / 20;
		for (var i = 0; i < this.points.length; i++) {
			this.points[i].y = Math.sin(i *0.5  + this.count) * 30;
			this.points[i].x = i * length + Math.cos(i *0.3  + this.count) * 20;
		};
    this.renderer.render(this.stage);
    this.frame = requestAnimationFrame(this.animate);
  }
}
