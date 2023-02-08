import React from 'react'
import Mainhome from '../Components/Mainhome'
import Navbar from "../Components/Navbar"
import "../Components/ServiceData.css";
import mimg from '../assets/backpacker.jpg';
import ServiceData from '../Components/ServiceData';

import Footer from '../Components/Footer';
import lakshadweep from '../assets/lakshadweep.jpg';
import goa from '../assets/goa.jpg';
import maldives from '../assets/maldives.jpg';
import munnar from '../assets/munnar.jpg';
import taj from '../assets/taj1.jpg';
import manali from '../assets/manali1.jpg';
import punjab from '../assets/punjab.jpg';
import rajasthan from '../assets/rajasthan.jpg';
import shimla from '../assets/shimla.jpg';

const Service = () => {
  return (
    <>
      <Navbar />
      <Mainhome
        cName="about"
        mainimg={mimg}
        title="Join us and change the world of travel ."

        btnClass="hide" />
      <div className="headings">
        <h3>Popular Destinations..</h3><br/>
        
      </div>
      <div className="headingsp ">
        <p>The journey of a thousand miles begins with a single step.</p>
      </div>
      <div className="service-card">
        <ServiceData
          postImage={goa}
          title='Goa'
          desc="Goa is a state in western India with coastlines stretching along the Arabian Sea.Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda."
          href="/goa"
        />
        <ServiceData
          postImage={maldives}
          title='Maldives'
          desc="Maldives, officially the Republic of Maldives, is an archipelagic state in South Asia, situated in the Indian Ocean. It lies southwest of Sri Lanka and India, about 750 kilometres from the Asian continents mainland"
          href="/maldives"
        />
        <ServiceData
          postImage={munnar}
          title='Munnar'
          desc="Munnar is a town in the Western Ghats mountain range in Indias Kerala state. A hill station and former resort for the British Raj elite, its surrounded by rolling hills dotted with tea plantations established in the late 19th century."
          href="/munnar"
        />
        <ServiceData
          postImage={lakshadweep}
          title='Lakshadweep'
          desc='Lakshadweep is a tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea, off the coast of Kerala, India. Not all of the islands are inhabited, and only a few are open to visitors (permits required). Kavaratti, one of the more developed islands, is home to dozens of mosques'
          href="/lakshadweep"

        />
        <ServiceData
          postImage={taj}
          title='Taj Mahal'
          desc="The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal."
          href="/tajmahal"

        />
        <ServiceData
          postImage={manali}
          title='Manali'
          desc="Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley."
          href="/manali"
        />
        <ServiceData
          postImage={punjab}
          title='Punjab'
          desc="Punjab, a state bordering Pakistan, is the heart of India’s Sikh community. The city of Amritsar, founded in the 1570s by Sikh Guru Ram Das, is the site of Harmandir Sahib, the holiest gurdwara (Sikh place of worship). Known in English as the Golden Temple, and surrounded by the Pool of Nectar,"
          href="/punjab"
        />
        <ServiceData
          postImage={shimla}
          title='Shimla'
          desc="Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903."
          href="/shimla"
        />
        <ServiceData
          postImage={rajasthan}
          title='Rajasthan'
          desc="Rajasthan is a state in northern India. It covers 342,239 square kilometres or 10.4 per cent of India's total geographical area. It is the largest Indian state by area and the seventh largest by population."
          href="/rajasthan"
        />


      </div>
      <Footer />
    </>
  )
}

export default Service