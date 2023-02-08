import React from 'react'
import taj1 from '../assets/taj1.jpg';
import taj2 from '../assets/taj2.jpg';
import ma1 from '../assets/manali1.jpg';
import ma2 from '../assets/manali2.jpg';
import mun1 from '../assets/munnar1.jpg';
import mun2 from '../assets/munnar2.jpg';
import DestinationData from './DestinationData';
import "./DestinationStyles.css";

const Destination = () => {
  return (
    
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give You the opportunity to see a time frame.</p>
      <DestinationData
      className="first-des"
      heading="Taj Mahal,Agra"
      text="The Taj Mahal 'Crown of the Palace' is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan  to house the tomb of his favourite wife, Mumtaz Mahal,Taj Mahal is called as the ‘symbol of love’"
      img1={taj1}
      img2={taj2}
      />
      <DestinationData
      className="first-des-reverse"
      heading="Manali,Himachal Pradesh"
      text="Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass."
      img1={ma1}
      img2={ma2}
      />
      <DestinationData
      className="first-des"
      heading="Munnar,Kerala"
      text="Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak."
      img1={mun1}
      img2={mun2}
      />
    </div>
    
  )
}

export default Destination