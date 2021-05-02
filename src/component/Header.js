import '../App.css';


let mainAuctionStyle = {color:'red'}
let mainWiniStyle = {color:'white'}

export default function Header(){

  return (
    
    <div className="black-nav">
    <div>
      <span  style={mainAuctionStyle}>Auction</span>
      <span style={mainWiniStyle}>Wini</span>
    </div>
  </div>
    
  );
}

