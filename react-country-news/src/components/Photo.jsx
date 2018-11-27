let React = require('react');

let Photo = React.createClass({
  getInitialState: function(){     //called only once when the component loads
    return {opacity: 1};
  },
  onMouseEnter: function(e){
    this.setState({opacity: 0.5});
  },
  onMouseLeave: function(e) {
    this.setState({opacity: 1});
  },
  onClick: function(itemNum){
    console.log("ItemNum: " + itemNum);
    let index = parseInt(itemNum.match(/\d+/g), 10);
    console.log("Index: " + index);
    $("#carousel1").carousel((index-1));
  },
  render: function() {
    let img = {
      width: "100%",
      height: "22rem",
      padding: 4
    }

    let imgColStyle = {
      opacity: this.state.opacity,
      paddingLeft: 5,
      paddingRight: 0,
      paddingBottom: 5
    }

    let imgContainer = {
      border: "1px solid #ddd",
      borderRadius: 4
    }

    let itemNum = `item${this.props.index}`;

    return(
      <div style={imgColStyle} className="col-md-3" data-toggle="modal" data-target="#modal" data-label={itemNum} onClick={this.onClick.bind(this, itemNum)}>
        <div style={imgContainer}>
          <img style={img} className="img-responsive" src={this.props.galleryImageUrl} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} />
        </div>
      </div>
    )
  }
});

module.exports = Photo;
