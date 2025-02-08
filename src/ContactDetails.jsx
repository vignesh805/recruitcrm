import { useState } from "react";
import './ContactDetails.css';

function ContactDetails() {
  // Form field states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [xingUrl, setXingUrl] = useState('');
  const [stage, setStage] = useState('');
  const [address, setAddress] = useState('');
  const [file, setFile] = useState(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted');
    console.log({
      firstName,
      lastName,
      title,
      email,
      phone,
      city,
      locality,
      facebookUrl,
      twitterUrl,
      linkedinUrl,
      xingUrl,
      stage,
      address,
      file
    });
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="Contactdetailsform">
      <form onSubmit={handleSubmit}>
        <div className="contfl">
          <div className="contfirst">
            <label>First name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              name="firstName"
            />
          </div>
          <div className="contlast">
            <label>Last name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              name="lastName"
            />
          </div>
        </div>

        <div className="contphem">
          <div className="personalingr2">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
            />
          </div>

          <div className="personalingr3">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>
        </div>

        <div className="personalcilo">
          <div className="personalingr4">
            <label>Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
            />
          </div>
          <div className="personalingr5">
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              name="city"
            />
          </div>
        </div>

        <div className="personalstco">
          <div className="personalingr6">
            <label>Locality</label>
            <input
              type="text"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              name="locality"
            />
          </div>
          <div className="personalingr7">
            <label>Facebook Profile URL</label>
            <input
              type="text"
              value={facebookUrl}
              onChange={(e) => setFacebookUrl(e.target.value)}
              name="facebookUrl"
            />
          </div>
        </div>

        <div className="personalingr9">
          <p><label>Full Address</label></p>
          <textarea
            className="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
          />
        </div>

        <div className="personalstco">
          <div className="personalingr6">
            <label>Twitter Profile URL</label>
            <input
              type="text"
              value={twitterUrl}
              onChange={(e) => setTwitterUrl(e.target.value)}
              name="twitterUrl"
            />
          </div>
          <div className="personalingr7">
            <label>Linkedin Profile URL</label>
            <input
              type="text"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              name="linkedinUrl"
            />
          </div>
        </div>

        <div className="personalstco">
          <div className="personalingr6">
            <label>Xing Profile URL</label>
            <input
              type="text"
              value={xingUrl}
              onChange={(e) => setXingUrl(e.target.value)}
              name="xingUrl"
            />
          </div>
          <div className="personalingr7">
            <label>Stage</label>
            <input
              type="text"
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              name="stage"
            />
          </div>
        </div>

        <div>
          <label>Upload File</label>
          <input
            type="file"
            onChange={handleFileChange}
            name="file"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactDetails;
