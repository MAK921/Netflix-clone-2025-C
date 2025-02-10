import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../Footer/footer.css'
const Footer = () => {
  return (
    <div className='footer_outer_container'>
     <div className='footer_inner_container'>
    <div className='footer_icons'>
    <FacebookOutlinedIcon />
    <InstagramIcon />
    <YouTubeIcon /> 
    </div>
    <div className='footer_data'>
    <div>
    <ul>
    <li>Audio Description</li>
    <li>Investor Relations</li>
    <li>Legal Notice</li>
    </ul>
    </div>
    <div>
    <ul>
    <li>Help center</li>
    <li>Jobs</li>
    <li>Cookie Preferences</li>
    </ul>
    </div>
    <div>
    <ul>
    <li>Gift cards</li>
    <li>Terms of use</li>
    <li>Corprate Information</li>
    </ul>
    </div>
    <div>
    <ul>
    <li>Media center</li>
    <li>Privacy</li>
    <li>Contact Us</li>
    </ul>
    </div>
    </div>
    
    <div className='service_code'>
    <p>Service code</p>
    </div>
    
    <div className='copy-write'></div>
    &copy; 1997-2025 Netflix, INC.
    </div> 
    </div>
  )
}

export default Footer






