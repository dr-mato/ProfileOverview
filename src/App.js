import React, {useState} from 'react';
import _ from 'lodash';
import {FaArrowLeft, FaArrowRight, FaQuoteRight} from 'react-icons/fa';


const arr=[{id:1,name:'Susan Smith',job:'web developer',image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",},
{id:2,name:'Anna Johnson',job:'web designer',image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',text:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',},{id:3,name:'Peter Jones',job:'intern',image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',},{id:4,name:'Bill Anderson',job:'the boss',image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',text:'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',},];


function App() {
  const [data, setData]=useState(arr[0]);
  const changeLeft=(id)=>{
    if(id===1){setData(arr[3]);} 
    else{setData(arr[id-2]);}
  }
  const changeRight=(id)=>{
    if(id===4){setData(arr[0]);} 
    else{setData(arr[id]);}
  }
  const random=()=>{
    let randomNum=_.random(1, 4);
    while (randomNum === data.id) randomNum = _.random(1, 4); 
    setData(arr[randomNum-1]); 
  }
  return (
    <div className="App">
      <div className="container">
        <h1 id="head">Our Reviews</h1>
        <hr id="line"></hr>
        <div className="profile">
          <div id="imgBlock"><div id="quote"><FaQuoteRight/></div><img src={data.image} id="img"></img></div>
          <h3 id="name">{data.name}</h3>
          <p id="job">{data.job}</p>
          <p id="text">{data.text}</p>
          <div className="buttons">
            <button id="left" onClick={() => changeLeft(data.id)}><FaArrowLeft/></button>
            <button id="right" onClick={() => changeRight(data.id)}><FaArrowRight/></button>
          </div>
          <button id="surprise" onClick={random}>Surprise Me</button>
        </div>  
      </div> 
    </div>
  );
}

export default App;
