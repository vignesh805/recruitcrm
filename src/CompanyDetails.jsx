
import './CompanyDetails.css'

function CompanyDetails()
{

   
    const handle = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        
      };


    return(
        <>
        <div className="personalform" >
                <form onSubmit={handle}>
                   
                    <div className='personalcilo'>
                    <div className='personalingr4'>
                    <label >Company Name</label>
                    <input type="text" placeholder="BMW"></input>
                    </div>
                     <div className='personalingr5'>
                    <label>Industry</label>
                    <input type="text" placeholder="Enter Industry"></input>
                    </div>
                    </div>
                    <div className='personalstco'>
                    <div className='personalingr6'>
                    <label>Website</label>
                    <input type="text" placeholder="www.bmw.com"></input>
                    </div>
                    <div className='personalingr7'>
                    <label>City</label>
                    <input type="text" placeholder="Enter City"></input>
                    </div>
                    </div>
                 
                    <div className='personalingr9'>
                    <p><label>Full Address</label></p>
                    <textarea className='text'></textarea>
                </div>

                <div className='facebookurl'>
                    <p><label>Facebook Profile URL</label></p>
                    <input type="text" placeholder="www.facebook.com"></input>
                </div>

                <div className='twitterurl'>
                    <p><label>Twitter Profile URL</label></p>
                    <input type="text" placeholder="www.twitter.com"></input>
                </div>

                <div className='Linkedinurl'>
                    <p><label>Linkedin Profile URL</label></p>
                    <input type="text" placeholder="www.Linkedin.com"></input>
                </div>

   
</form>
</div>

        </>
    )
}

export default CompanyDetails;