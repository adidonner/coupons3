import { useParams } from "react-router-dom";
import "./CustomerDetails1.css";
import { useEffect, useState } from "react";
import customerService from "../../../Services/CustomerService";
import CustomerModel from "../../../Models/CustomerModel";

function CustomerDetails1(): JSX.Element {
    const params = useParams();
    const customerId = +params.customerId;

    const[customer, setCustomer] = useState<CustomerModel>();
    useEffect(()=>{
        customerService
            .getCustomerDetails()
            .then((p) => setCustomer(p))
            .catch((e) => alert(e.message));
    },[]);
    return (
        <div className="CustomerDetails1" >
            
			{customer && (
                <>        
                    <h4>Id: {customer.id}</h4>
                    <h4>First Name: {customer.firstName}</h4>
                    <h4>Last Name: {customer.lastName}</h4>
                    <h4>User Name: {customer.userName}</h4>
                    <h4>Email:{customer.email}</h4>
                    </>
            )}
        </div>
    );
}

export default CustomerDetails1;
