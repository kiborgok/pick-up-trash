import './account.css';
import {useState} from 'react';

function AccountPage(){
    return(
<div className="container">
<div class="Acc-form">
<h2>Account Page</h2>
  <form>
    <p>Name</p> 
    <input type="text" placeholder="Enter Name" name="name" required></input>

    <p>Phone No:</p>
        <input type="Phone No" placeholder="Enter Phone No" name="Phone" required></input>
    
    <p>Residence</p>
        <input type="Residence" placeholder="Enter Residence" name="Residence" required></input>

    <p>Email</p>
        <input type="Email" placeholder="Enter Email" name="Email" required></input>

    {/* <button type="submit" class="btn">Submit</button> */}
  </form>
</div>
</div>
    )
}


// class Form extends Component{
//     constructor(props) {
//         super(props)
//         this.state = {
//             Name: "",
//             PhoneNo:"",
//             Residence:"",
//             Email:"",
//         }
//         this.handleSubmit=this.handleSubmit.bind(this)
//     }
//     namehandler = (event) =>{
//         this.setState({
//             name: event.target.value
//         })
//     }
//     phonehandler = (event) =>{
//             this.setState({
//                 phoneNo: event.target.value
//             })
//     }
//     residencehandler = (event) =>{
//                 this.setState({
//                     residence: event.target.value
//                 })
//     }
//     emailhandler = (event) =>{
//                     this.setState({
//                         email: event.target.value
//                     })
//     }
// }
//         handleSubmit = (event) => {
//             alert
//         }

export default AccountPage;