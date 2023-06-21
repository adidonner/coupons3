import { useNavigate, useParams } from "react-router-dom";
import "./CustomerDetails.css";
import { useEffect, useState } from "react";
import CustomerModel from "../../../Models/CustomerModel";
import { NavLink } from "react-router-dom";
import adminService from "../../../Services/AdminService";
import notificationService from "../../../Services/NotificationService";

function CustomerDetails(): JSX.Element {

    const params = useParams();
    const customerId = +params.customerId;

    const [customer, setCustomer] = useState<CustomerModel>();
    const navigate = useNavigate();
    
    async function deleteCustomer(){

        if (window.confirm("Do you confirm deleting Customer - " + customer.firstName + " " + customer.lastName + "?")) {
            try{
                await adminService.deleteCustomer(customerId);
                notificationService.success("Customer deleted");
                navigate("/admin/all-customers");
            } catch (error: any){
                notificationService.error("customer mot deleted")
            }

        }
    }

    useEffect(() =>{
        adminService
            .getOneCustomer(customerId)
            .then((p) => setCustomer(p))
            .catch((e) => notificationService.error("Customer with this id not found"))

    },[]);

    return (
        <div className="customerDetails">
            <h3> Customer Details</h3>
            {customer &&(
                <>
                    <h4>Id: {customer.id}</h4>
                    <h4>First Name: {customer.firstName}</h4>
                    <h4>Last Name: {customer.lastName}</h4>
                    <h4>User Name: {customer.userName}</h4>
                    <h4>Email: {customer.email}</h4>

                    <NavLink to="/admin/all-customers">Back to all Customers</NavLink>
                    <span> | </span>
                    <NavLink to="" onClick={deleteCustomer}>Delete Customer</NavLink>
                    <span> | </span>
                    <NavLink to={"/admin/edit-customer/" + customerId} >Edit Customer Details</NavLink>
                </>
            )}
        </div>
    );
}

export default CustomerDetails;
