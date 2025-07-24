import React from 'react'
import { MdCall } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { FaEnvelope } from 'react-icons/fa';
import '../../../src/App.css'
import { FaLocationCrosshairs, FaLocationDot, FaLocationPinLock } from 'react-icons/fa6';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LiaSearchLocationSolid } from 'react-icons/lia';
import { ImLocation, ImLocation2 } from 'react-icons/im';

const Info = () => {
  return (
    <div className='info px-3'>
        <h4>Feel Free To Connect With Us</h4>

        {/* Contact Number */}
        <div className='info-box'>
            <h6><MdCall className='icon'/> Call Us:</h6>
            <ul>
                <li><a href="tel: +919074309233">9074309233</a></li>
                <li><a href="tel: +919669692246">9669692246</a></li>
            </ul>
        </div>

        {/* Email Address */}
        <div className='info-box'>
            <h6><FaEnvelope className='icon'/> Mail Us:</h6>
            <ul>
                <li><a href="mailto:indravatidramasociety@gmail.com">indravatidramasociety@gmail.com</a></li>
                <li><a href="mailto:indravatidramasociety@gmail.com">indravatidramasociety@gmail.com</a></li>
            </ul>
        </div>

            {/* Head Office */}
            
            <div className='info-box'>
                <h6><ImLocation className='icon'/> Head Office:</h6>
                <ul>
                    <li>
                        <a href="https://maps.app.goo.gl/rPV1EgGYimYayoFX8" target="_blank">South Karaundiya, Gopal Das Road Sidhi, MP, India - 486661</a>
                    </li>
                </ul>
                
            </div>
            
            {/* Branch Office */}
            <div className='info-box'>
                <h6><ImLocation className='icon'/> Branch Office:</h6>
                <ul>
                    <li>
                        <a href="https://maps.app.goo.gl/rPV1EgGYimYayoFX8" target="_blank">353, Near SKPS School, Tilak Nagar, Indore - 452018</a>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Info