import React from 'react';


export default class Intro extends React.Component {
  constructor() {
    super();

    this.state = {
      ctx: null
    };
  }

  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    this.refs.canvas.width = 2000;
    this.refs.canvas.height = 1500;
    this.state.ctx = this.refs.canvas.getContext('2d');
    const rand  = Math.floor(Math.random() * 20) + 1;
    console.log(this.state.ctx);

    for(let i = 0; i < rand; i++ ){
      let randomColour = '#' + Math.random().toString(16).substring(2, 8);
      let randomSize = Math.round(Math.random()*20);
      let xPos = Math.round(Math.random()*2000);
      let yPos = Math.round(Math.random()*1500);
      this.drawFilledCircle(randomSize, xPos, yPos, randomColour);
      this.drawSplatter(randomSize, xPos, yPos, randomColour);
    }
  }
  drawFilledCircle(size,xPos,yPos,colour){
    const ctx = this.state.ctx;

    ctx.beginPath();
    ctx.arc(xPos,yPos,size,0,2*Math.PI);
    ctx.fillStyle = colour;
    ctx.fill();
  }

  drawSplatter(size,xPos,yPos,colour){
    for (let j = 0; j < 10; j++) {
      let splatSize = size / Math.round(Math.random() * 30);
      this.drawFilledCircle(splatSize,xPos + Math.round(Math.random() * 40),yPos + Math.round(Math.random() * 50), colour);
    }
  }

  render() {
    return (
      <section id="intro" className="intro">
        <canvas ref="canvas" className="overlay"></canvas>
        <div className="content">
          <div className="container clearfix">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-12">
                <p className="italic">Oh, hello, nice to meet you!</p>
                <h1>I'm Jeyhun Ashurbayov</h1>
                <p className="italic">I am a Full-Stack Web Developer who believes can fly.</p>
              </div>
              {/*<div className="col-md-8 col-md-offset-2 col-sm-12">*/}
              {/*<p className="italic">Oh, hello, nice to meet you!</p>*/}
              {/*<h1>I'am Jeyhun Ashurbayov</h1>*/}
              {/*<p className="italic">Sorry, site is Under Construction now</p>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </section>
    );
  }
}