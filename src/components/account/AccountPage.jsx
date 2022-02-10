import "./account.css";
import { useState, useEffect } from "react";


function AccountPage({user}) {
      let [userProfile, setUserProfile] = useState({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          location: ""
        })

        useEffect(() => {
          user && user.client && setUserProfile(user.client)
        },[])
  return (
    <div className="container">
        <h2>Account Page</h2>
        <div className="profile-photo"></div>
      <div class="Acc-form">
        <form class="Accpg-form">
          <div className="name">
            <label>Name:</label>
            <input 
            type="text" 
            name="name" 
            placeholder="Gabriel" 
            value={userProfile.firstName + userProfile.lastName}/>
          </div>
          <div className="PhoneNo" >
            <label>Phone No:</label>
            <input type="text" name="PhoneNo" 
            placeholder="0722 XXX XXX"
            value={userProfile.phoneNumber}
            />
          </div>
          <div className="Residence">
            <label>Residence:</label>
            <input type="text" name="Residence" 
            placeholder="Komarocks"
            value={userProfile.location}
            />
          </div>
          {/* <div className="Email">
            <label>Email:</label>
            <input type="text" name="Email" placeholder="example@gmail.com"/>
          </div> */}
        </form>
        {/* <button type="submit" class="btn">Submit</button> */}
      </div>
    </div>
  );
}
export default AccountPage;
