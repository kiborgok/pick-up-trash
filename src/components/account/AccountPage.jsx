import "./account.css";
import { useState } from "react";


function AccountPage() {
  return (
    
    <div className="container">
        <h2>Account Page:</h2>
        <div className="profile-photo"></div>
      <div class="Acc-form">
        <form class="Accpg-form">
          <div className="name">
            <label>Name:</label>
            <input type="text" name="name" placeholder="   Gabriel"/>
          </div>
          <div className="PhoneNo" >
            <label>Phone No:</label>
            <input type="text" name="PhoneNo" placeholder="   0722 XXX XXX"/>
          </div>
          <div className="Residence">
            <label>Residence:</label>
            <input type="text" name="Residence" placeholder="   Komarocks"/>
          </div>
          <div className="Email">
            <label>Email:</label>
            <input type="text" name="Email" placeholder="   example@gmail.com"/>
          </div>
        </form>
        <button type="submit" class="btn">Submit</button>
      </div>
    </div>
  );
}
export default AccountPage;
