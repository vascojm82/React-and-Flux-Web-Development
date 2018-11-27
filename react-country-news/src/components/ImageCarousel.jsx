let React = require('react');
let CarouselItem = require('./CarouselItem.jsx');

let ImageCarousel = React.createClass({
  onClick: function(op){
    if(op === "prev"){
      console.log("OP: " + op);
      $("#carousel1").carousel("prev");
    }else if(op === "next"){
      console.log("OP: " + op);
      $("#carousel1").carousel("next");
    }
  },
  reRoute: function(index){
    $("#carousel1").carousel(index);
  },
  render: function(){
    let modalDimensions = {
      width: "55rem"
    }

    let carouselDimensions = {
      width: "100%"
    }

    let carousel ={
      border: "5px solid #FFF"
    }

    let carouselControl = {
      backgroundImage: "none",
      zIndex: 2,
    	height: "20",
    	top: "50%"
    }

    return(
      <div id="modal" className="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
			   <div style={modalDimensions} className="modal-dialog modal-lg">
				    <div className="modal-content modal-width content">
  					  <div id="carousel1" style={carousel} className="slide carousel-width carousel-fade" data-ride="carousel">
  					    <ol className="carousel-indicators">
                  {this.props.images.map((item, i) => {
                     // Return the image. Also pass key
                     let itemNo = `item${(i+1)}`;

                     if(i>0){
                       return (<li id={itemNo} className="" onClick={this.reRoute.bind(this, i)}></li>);
                     }else{
                       return (<li id={itemNo} className="active" onClick={this.reRoute.bind(this, i)}></li>);
                     }
                  })}
  					    </ol>

    						<div className="carousel-inner carousel-width">
                  {this.props.images.map((item, i) => {
                     // Return the image. Also pass key
                     if(i > 0)
                      return (<CarouselItem image={item.imgUrl} index={(i+1)} activeItem="" />);
                     else
                      return (<CarouselItem image={item.imgUrl} index={(i+1)} activeItem="active" />);
                  })}
  					    </div>

    						<span style={carouselControl} className="left carousel-control prev" onClick={this.onClick.bind(this, "prev")}>
    							<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    						</span>
    						<span style={carouselControl} className="right carousel-control next" onClick={this.onClick.bind(this, "next")}>
    							<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    						</span>
					    </div>
					  </div>
				  </div>
				</div>
    )
  }
});

module.exports = ImageCarousel;
