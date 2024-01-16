import "./Footer.css"
import { Link } from 'react-router-dom'
import showToast from 'crunchy-toast'
import MapImg from "../../views/Home/img/ICON/google-maps.png"
import GmailImg from "../../views/Home/img/ICON/gmail (1).png"
import ContactImg from "../../views/Home/img/ICON/telephone-call.png"


function footerContact()
{
   showToast('Thanku For Contacting Us🙏','success', 3000);
}
function Footer()
{
  
  return(

    <>

<section id="footer">

<div className="container">

  <div className="row">

    <div className="col-md-4 footer-box">
      <p><b>Quick Links</b></p>
      
        <h5>
          <Link to="/" className="footer-quick-link">Home</Link>
        </h5>
   
   
       <h5>
        <Link to="/laptop" className="footer-quick-link">Laptop&Tablets</Link>
        </h5>
    

   
        <h5> 
          <Link to="/smartphone"  className="footer-quick-link">Smartphones</Link>
        </h5>
    

    
      <h5> 
        <Link to="/tv" className="footer-quick-link">TV</Link>
      </h5> 

      <h5> 
        <Link to="/login" className="footer-quick-link">Login</Link>
      </h5> 

      <h5> 
        <Link to="/signup" className="footer-quick-link">signup</Link>
      </h5> 
 

    
    </div>

    <div className="col-md-4 footer-box">
      <p><b>Address</b></p>
      <p>
        <img src={MapImg} className="direction"/>
         Trade Centre,Banglore</p>
      <p>
        <img src={ContactImg}  className="direction"/>
         +9110020210210</p>
      <p>
        <img src={GmailImg}  className="direction"/> XiaomiCenter500@gmail.com</p>
    </div>

    

    <div className="col-md-4 footer-box">
       <div className="Faq-text">
       <p><b>Contact</b></p>
       </div>
      
      <input type="email" placeholder="Enter email" className="form-control"/>
      <input type="text" className="form-control" placeholder="Any question"  />
      <button type="button" className="btn btn-primary" id="submit-btn"onClick={footerContact}>Submit</button>
    </div>
  </div>


  <hr/>
  
</div>
</section>

    
    </>
  )
  
}

export default Footer
          