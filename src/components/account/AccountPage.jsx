import "./account.css";
import { useState } from "react";
// import {FontAwesomeIcon} from '@https://fontawesome.com/icons/github?s=brands';

function AccountPage() {
  return (
    
    <div className="container">
        {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
        <h2>Account Page:</h2>
      <div class="Acc-form">
        <img src="" alt="" />
        <form>
          <div className="name">
            <label>Name:</label>
            <input type="text" name="name" />
          </div>
          <div className="PhoneNo">
            <label>Phone No:</label>
            <input type="text" name="PhoneNo" />
          </div>
          <div className="Residence">
            <label>Residence:</label>
            <input type="text" name="Residence" />
          </div>
          <div className="Email">
            <label>Email:</label>
            <input type="text" name="Email" />
          </div>

          {/* <button type="submit" class="btn">Submit</button> */}
        </form>
      </div>
    </div>
  );
}
export default AccountPage;
