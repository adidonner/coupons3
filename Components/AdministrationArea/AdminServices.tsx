import { NavLink, useNavigate } from "react-router-dom";
import "./AdminServices.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CompanyModel from "../../Models/CompanyModel";

function AdminServices(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<CompanyModel>();
    const [companyId, setCompanyId] = useState("");
    const [customerId, setCustomerId] = useState("");

    // useEffect(()=>{
        
    // },[]);
            return (
                <div className="adminServices">
            <h3>Hello Administrator</h3>
            <h5>
                <ul>
                    <li style={{ listStyleType: 'disc'}}><NavLink to="all-companies">Check List of all Companies</NavLink></li>
                    <li style={{ listStyleType: 'disc'}}><NavLink to={"/admin/company/details/" + companyId} >Search Company with Id:  </NavLink>
                        <input
                        type="number"
                        value={companyId}
                        onChange={(e) => setCompanyId(e.target.value)}
                        min={1}
                        />
                    </li>
                </ul>
                <ul>
                    <li style={{ listStyleType: 'disc'}}><NavLink to="all-customers">Check List of all Customers</NavLink></li>
                    <li style={{ listStyleType: 'disc'}}><NavLink to={"/admin/customer/details/" + customerId} >Search Customer with Id: </NavLink>
                        <input
                        type="number"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                        min={1}
                        />
                    </li>
                </ul>
            </h5>
        </div>
    );
}

export default AdminServices;
