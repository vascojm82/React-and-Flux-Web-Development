let React = require('react');
let Card = require('./Card.jsx');

let CardList = React.createClass({
  getInitialState: function(){        //called only once when the component loads
    //Simulated API call returns array of card objects
    let apiCall = [{
        title: "Lorem ipsum dolor sit amet?",
        subtitle: "Nunc sed urna sed lectus malesuada they will non tellus.",
        description: "Fusce mollis mi eu dolor placerat, at hendrerit be back. Pellentesque velit eros, rutrum a nisi fringilla, congue pulvinar justo. Nunc dapibus magna vitae semper malesuada.",
        imgUrl: "img/img1.jpg",
        imgDesc: "Royal Palace, Madrid Spain"
      },
      {
        title: "Lorem ipsum dolor sit amet?",
        subtitle: "Nunc sed urna sed lectus malesuada fringilla sed non tellus.",
        description: "Fusce mollis mi eu dolor placerat, at hendrerit mauris euismod. Bounce velit eros, rutrum a nisi proud, congue pulvinar justo. Nunc friends magna vitae semper malesuada.",
        imgUrl: "img/img2.gif",
        imgDesc: "London, United Kingdom"
      },
      {
        title: "Lorem ipsum dolor sit amet?",
        subtitle: "Trigger sed urna sed lectus WW sed non tellus.",
        description: "Fusce mollis mi eu dolor placerat, -III euismod. Pellentesque velit eros, rutrum a nisi fringilla, congue pulvinar justo. Nunc dapibus magna vitae semper malesuada Yanks.",
        imgUrl: "img/img21.jpg",
        imgDesc: "Trigger to a World Conflict"
      },
      {
        title: "Lorem ipsum dolor sit amet?",
        subtitle: "Commemoration sed urna sed lectus One Thousand Years sed non tellus.",
        description: "Fusce mollis mi eu dolor placerat, at -of history euismod. Pellentesque velit eros, rutrum a nisi fringilla, congue pulvinar justo. Nunc dapibus magna vitae semper malesuada.",
        imgUrl: "img/img15.jpg",
        imgDesc: "Spanish Empire"
      },
      {
        title: "Lorem ipsum dolor sit amet?",
        subtitle: "Nunc sed urna sed lectus malesuada fringilla sed non tellus.",
        description: "Fusce mollis mi eu dolor placerat, at hundred years euismod. Pellentesque velit eros, rutrum -of war fringilla, congue pulvinar justo. Nunc dapibus your end semper WW3 malesuada.",
        imgUrl: "img/img3.jpg",
        imgDesc: "Washington D.C, U.S."
      },
      {
        title: "Lorem ipsum dolor sit amet?",
        subtitle: "Tu sed Soul of Gold malesuada fringilla sed non tellus.",
        description: "Fusce mollis mi eu dolor placerat, at hendrerit mauris euismod. It doesn't end here, rutrum a nisi fringilla, congue pulvinar justo. Nunc you'll pay vitae semper malesuada yanks.",
        imgUrl: "img/img4.png",
        imgDesc: "European Union"
      }
    ];

    let cardsArray = [];

    apiCall.forEach(function(item, index){
      cardsArray.push(item);
    });

    return {
      cards: cardsArray
    };
  },
  render: function(){
    return(
      <div>
        {this.state.cards.map((item, i) => {
           // Return the card. Also pass key
           return (<Card title={item.title} subtitle={item.subtitle} description={item.description} url={item.imgUrl} imgDesc={item.imgDesc} />);
        })}
      </div>
    );
  }
});

module.exports = CardList;
