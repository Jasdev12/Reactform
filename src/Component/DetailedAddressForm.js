import React, { useState } from 'react';
import './DetailedAddressForm.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faUser} from '@fortawesome/free-solid-svg-icons'
import ViewMenu from './ViewMenu';
 
const DetailedAddressForm = () => {
  const [formData, setFormData] = useState({
    addressee: '',
    salutation: '',
    position: '',
    reference: '',
    addressType: '',
    privateAndConfident: false,
    address: '',
    addres:'',
    addresss:'',
    postcode: '',
    addressStatus: '',
    nonStandardAddress: false,
  });
  // const [isModelOpen, setIsModelOpen] = useState(false)
  const[historyOpen, setHistoryOpen] = useState(false);
  const[isViewMenuOpen, setIsViewMenuOpen] = useState(false);
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
 
  const toggleViewMenu = () => {
    setIsViewMenuOpen(!isViewMenuOpen);
  };
  // const openModal = () => {
  //   setIsModelOpen(true)
  // };
  // const closeModal = () => {
  //   setIsModelOpen(false);
  // };
 
  const openHistory = () => {
    setHistoryOpen(true);
  };
  const closeHistory = () => {
    setHistoryOpen(false);
  }
  // const dateFormatter = new Intl.DateTimeFormat('en-us',{ dateStyle:'full'});
  // const timeFormatter = new Intl.DateTimeFormat('en-us',{ timeStyle:'short'});
  // const currencyFormatter = new Intl.NumberFormat('en-us',{ style:'currency', currency:'USD'});
 
  // const currentDate = dateFormatter.format(new Date());
  // const currentTime = timeFormatter.format(new Date());
  // const exCurrency = currencyFormatter.format(12345.67);
 
  return (
     
      <div className="container">
       <div className="menu-bar">
       <ul>
              <li>File</li>
              <span style={{position:"absolute",top:"48px", left:"386px"}}>
              <FontAwesomeIcon icon={faUser} style={{ color:'#f0c838',}} />
              </span>
              {/* <li onClick={openModal}>View</li> */}
              <li onClick={toggleViewMenu}>View
                { isViewMenuOpen && (
                <ul className='dropdown'>
                  <li onClick={() => alert('customer clicked')}>Customer</li><br></br>
                  <li onClick={openHistory}>History</li>
                </ul>
                )}
               </li>
              <li>Maintain</li>
       </ul>
       </div>
     <form onSubmit={handleSubmit}>
      <fieldset>
      <legend>Addressee Details</legend>
     <div className="form-group">
        <div className='col-25'>
       <label>Addressee</label>
       </div>
       <div className='col-75 '>
           <input
           
            type="text"
            className="form-control"
            name="addressee"
            value={formData.addressee}
            onChange={handleChange}
            required
          /> <span className='label-position'>(Non Standard)</span>
          </div>
     </div>
      <div className="form-group">
      <div className='col-25'>
       <label>Salutation</label>
       </div>
       <div className='col-75'>
          <input
            type="text"
            className="form-control"
            name="salutation"
            value={formData.salutation}
            onChange={handleChange}
            required
          />  <span className='label-position'>(Non Standard)</span>
          </div>
     </div>
    <div className="form-group ">
    <div className='col-25'>
     <label>Position</label>
     </div>
     <div className='col-75'>
       <input
            type="text"
            className="form-control"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
          </div>
    </div>
    <div className="form-group ">
    <div className='col-25'>
     <label>Reference</label>
     </div>
     <div className='col-75'>
       <input
            type="text"
            className="form-control"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
          />
         
       <input
            type="checkbox"
            className="form-check-input"
            name="privateAndConfident"
            checked={formData.privateAndConfident}
            onChange={handleChange}
          />
         
    <label className="label-position">Private & Confident</label>
     </div>
         
       </div>
      <div className="form-group">
      <div className='col-25'>
      <label>Address Type</label>
      </div>
      <div className='col-75'>
      <select
            className="form-control"
            name="addressType"
            style={{width:"49%"}}
            value={formData.addressType}
            onChange={handleChange}
            required
       >
        <option value="">Select</option>
        <option value="home">Home</option>
        <option value="work">Work</option>
      </select>
      </div>
      </div>
      </fieldset>
      <fieldset>
      <legend>Address Details</legend>
     <div className="form-group">
     <div className='col-25'>
     <label>Address</label>
     </div>
     <div className='col-75'>
      <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {/* <img src={require('../../public/Se')}> */}
          <span className='square-btn'>
          <FontAwesomeIcon icon={faSearch} />
          </span>
          <br></br>
           <input
            type="text"
            className="form-control"
            name="addres"
            value={formData.addres}
            onChange={handleChange}
            required
          />
          <br></br>
           <input
            type="text"
            className="form-control"
            name="addresss"
            value={formData.addresss}
            onChange={handleChange}
            required
          />
</div>
      {/* <div className='col-75'>
      <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
      </div> */}
     </div>
     <div className="form-group">
     <div className='col-25'>
    <label>Postcode</label>
    </div>
    <div className='col-75'>
     <input
            type="text"
            className="form-control"
            name="postcode"
            style={{width:"30%"}}
            value={formData.postcode}
            onChange={handleChange}
            required
          />
     </div>
     </div>
     <div className="form-group">
     <div className='col-25'>
        <label>Address Status</label>
        </div>
        <div className='col-75 '>
      <select
            className="form-control"
            name="addressStatus"
            style={{width:"60%"}}
            value={formData.addressStatus}
            onChange={handleChange}
            required
        >
         <option value="">Select</option>
         <option value="active">Active</option>
         <option value="inactive">Inactive</option>
       </select>
       </div>
       </div>
     <div className="form-group form-check">
     <div className='col-25'>
 
        </div>
        <div className='col-75 '>
       <input
            type="checkbox"
            className="form-check-input"
            name="nonStandardAddress"
            checked={formData.nonStandardAddress}
            onChange={handleChange}
          />
    <label className="form-check-label">Retain Non Standard Address Format</label>
     </div>
     </div>
     </fieldset>
     <p style={{font:"20%"}}>CU0008</p>
     <button type="submit" className="btn">Done</button>
     {/* <div>
       <p><strong>CurrentDate:</strong>{currentDate}</p>
       <p><strong>CurrentTime:</strong>{currentTime}</p>
       <p><strong>Currenct:</strong>{exCurrency}</p>
 
     </div> */}
    </form>
    {/* <ViewMenu isOpen={isModelOpen} onClose={closeModal}/> */}
    {historyOpen && <ViewMenu onClose={closeHistory}/>}
    <label for="start">Start date:</label>
    <input type="date" id="start" name="trip-start"  min="2020-01-01" max="2024-12-31" />
    {/* <label for="meeting-time">Choose a time for your appointment:</label> */}
    <label for="appt">Choose a time for your meeting:</label>
 
<input type="time" id="appt" name="appt" min="09:00" max="18:00" required />
 
{/* <small>Office hours are 9am to 6pm</small>
    <input
  type="datetime-local"
  id="meeting-time"
  name="meeting-time"
  value="2018-06-12T19:30"
  min="2018-06-07T00:00"
  max="2018-06-14T00:00" /> */}
 
 
    </div>
  );
};
 export default DetailedAddressForm;