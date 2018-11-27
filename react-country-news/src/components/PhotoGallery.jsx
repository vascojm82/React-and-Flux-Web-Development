let React = require('react');
let Photo = require('./Photo.jsx');
let ImageCarousel = require('./ImageCarousel.jsx');

let PhotoGallery = React.createClass({
  getInitialState: function(){        //called only once when the component loads
    //Simulated API call returns array of image objects
    let apiCall = [{
        imgUrl: "img/Royal_Palace_CharlesI.jpg"
      },
      {
        imgUrl: "img/Royal_Palace_CharlesI_2.jpg"
      },
      {
        imgUrl: "img/charlesISpain.jpg"
      },
      {
        imgUrl: "img/charlesISpain_2.jpg"
      },
      {
        imgUrl: "img/Royal_Palace_CharlesI_4.jpg"
      },
      {
        imgUrl: "img/Royal_Palace_CharlesI_3.jpg"
      },
      {
        imgUrl: "img/img8.png"
      },
      {
        imgUrl: "img/img5.png"
      },
      {
        imgUrl: "img/img9.jpg"
      },
      {
        imgUrl: "img/img10.jpg"
      },
      {
        imgUrl: "img/img12.jpg"
      },
      {
        imgUrl: "img/RichardIII.jpg"
      },
      {
        imgUrl: "img/img11.jpg"
      },
      {
        imgUrl: "img/img20.png"
      },
      {
        imgUrl: "img/img18.jpg"
      },
      {
        imgUrl: "img/img17.jpg"
      },
      {
        imgUrl: "img/img16.jpg"
      },
      {
        imgUrl: "img/img7.png"
      },
      {
        imgUrl: "img/img13.png"
      },
      {
        imgUrl: "img/img14.png"
      }
    ];

    let imgArray = [];

    apiCall.forEach(function(item, index){
      imgArray.push(item);
    });

    return {
      images: imgArray
    };
  },
  render: function(){
    let panelStyle= {
      background: "#fefefe",
      borderColor: "2px solid #DDDDE0"
    }

    let panelBodyStyle = {
      padding: 0
    }

    let imagesRowStyle = {
      padding: "5px 20px 0 15px"
    }

    return(
      <div className="col-md-12">
        <div style={panelStyle} className="panel panel-default">
          <div style={panelBodyStyle} className="panel-body">
            <div style={imagesRowStyle} className="row">
              {this.state.images.map((item, i) => {
                 // Return the image. Also pass key
                 return (<Photo galleryImageUrl={item.imgUrl} index={(i+1)} />);
              })}
            </div>
            <ImageCarousel images={this.state.images} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PhotoGallery;
