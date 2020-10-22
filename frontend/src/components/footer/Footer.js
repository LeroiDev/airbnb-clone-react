import React from 'react'
import './footer.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy; just kidding -just a quick demo of airbnb.
      </p>
      <div className="footer__links">
        <p>
        <FiberManualRecordIcon/>
        Privacy 
        </p>
     <p>
     <FiberManualRecordIcon/>
        Terms 
     </p>
      <p>
      <FiberManualRecordIcon/>
        Sitemap 
      </p>
      <p>
      <FiberManualRecordIcon/>
        Company 
      </p>
      <p>
      <FiberManualRecordIcon/>
        Details
      </p>
      </div>
    </footer>
  )
}

export default Footer
