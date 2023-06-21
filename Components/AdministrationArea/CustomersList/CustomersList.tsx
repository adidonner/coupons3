import { useEffect, useState } from "react";
import "./CustomersList.css";
import { getAllCustomers } from "../../../Services/AdminService";
import CustomerModel from "../../../Models/CustomerModel";
import CustomerTable from "../CustomerTable/CustomerTable";
import { NavLink } from "react-router-dom";

function CustomersList(): JSX.Element {
  
    const[customers, setCustomers] = useState<CustomerModel[]>();
    useEffect(()=>{
        getAllCustomers()
        .then(res => setCustomers(res.data))
        .catch(() => alert("wait for a while and try again or login"))
    },[]);
    
    return (
        <div className="customersList">
            <NavLink to="/admin/customer/new" >➕ </NavLink>
			
            <h3>List of Customers</h3>
                <tr>
                    <th>Id:</th>
                    <th>First Name: </th>
                    <th>Last Name:</th>
                    <th>User Name:</th>
                    <th>Email:</th>
                </tr>
            {customers?.length > 0 ?
            <>
            {/* call the component "Customer Table" to complete rows and columns of the list */}
            {customers.map(customer=>
                <CustomerTable key={customer.id} customer={customer}/>
                )}
            </>
            : <span> No Customers Registered at the Moment</span>}
            <br /> 
            <h4> Press on Customers's id for details</h4>
        </div>
    );
}

export default CustomersList;
