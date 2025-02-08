import { useState } from "react";
import './AddCandidate.css'

function AddCandidate()
{

  
    const handle = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        
      };

      const[toggles,setToggles]=useState(false)

      const handles=()=>{
        setToggles(!toggles)
        console.log(toggles,'value');
      }

      const [file, setFile] = useState(null);

      const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
    
      const handless = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:");
        console.log("Uploaded File:", file);
      };




    return(
        <>
        <div className="personalform" >
                <form onSubmit={handle}>

                <div className="upload-section">
          <label htmlFor="fileUpload" className="upload-label">
            <input type="file" id="fileUpload" onChange={handleFileChange} style={{ display: 'none' }} />
            <span className="upload-icon">⬆️</span>
            <span onSubmit={handless}>Upload Candidate CV/Resume Here</span>
          </label>
        </div>

                    <div className='personalingr'>
                    <label>First name</label>
                    <input type="text"></input>
                    </div>
                    <div className='personalingr1'>
                    <label>Last name</label>
                    <input type="text"></input>
                    </div>
                    <div className='personalingr2'>
                    <label>Phone number</label>
                    <input type="text"></input>
                    </div>
                    <div className='personalingr3'>
                    <label>Email</label>
                    <input type="text"></input>
                    </div>
                    <div className='personalcilo'>
                    <div className='personalingr4'>
                    <label >city</label>
                    <input type="text"></input>
                    </div>
                     <div className='personalingr5'>
                    <label>Locality</label>
                    <input type="text"></input>
                    </div>
                    </div>
                    <div className='personalstco'>
                    <div className='personalingr6'>
                    <label>State</label>
                    <input type="text"></input>
                    </div>
                    <div className='personalingr7'>
                    <label>country</label>
                    <input type="text"></input>
                    </div>
                    </div>
                 
                    <div className='personalingr9'>
                    <p><label>Full Address</label></p>
                    <textarea className='text'></textarea>
                </div>

                <div className='perrelgen'>
                  <div className='relo'>
                  <div className='currentlys'><label>willing to relocate</label>
<div onClick={handles} className={`wholr ${toggles ? 'actives' : ''}`}>
{toggles?<div className='rightro'></div>:<div className='leftro'></div>}
</div>
</div>
</div>

<div className='pergender'>
<label>gender</label>
                <input list="genfal" placeholder='Please Select & Search'/>
        <datalist id="genfal">
        <option>Male</option>
        <option>Female</option>
        <option>Not Available</option>
        <option>Prefer Not to Say</option>
    </datalist>
</div>
                </div>

                <div className='candate'>
<label>Date of Birth</label>
<input type="date" id="birthday" name="birthday"/>
</div>
</form>
</div>

        </>
    )
}

export default AddCandidate;