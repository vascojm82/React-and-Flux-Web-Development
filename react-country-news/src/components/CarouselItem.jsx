let React = require('react');

let CarouselItem = React.createClass({
  render: function(){

    let itemId = `item${this.props.index}`;

    let itemActive = `item ${this.props.activeItem}`;

    let imgUrl = {
      backgroundImage: `url(${this.props.image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "55rem 40rem",
      width: "55rem",
      height: "40rem"
    }

    let overlay = {
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "#000",
      opacity: "0.2",
      transition: "all 0.2s ease-out",
    }

    return(
      <div id={itemId} className={itemActive} style={imgUrl}>
        <button type="button" className="close close-btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div style={overlay}></div>
        <div className="carousel-caption">
          <h3>Image {this.props.index}</h3>
          <p>Carousel Image # {this.props.index}</p>
        </div>
      </div>
    )
  }
});

module.exports = CarouselItem;
