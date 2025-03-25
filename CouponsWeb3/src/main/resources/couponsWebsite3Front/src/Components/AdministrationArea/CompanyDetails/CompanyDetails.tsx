import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CompanyModel from "../../../Models/CompanyModel";
import "./CompanyDetails.css";
import adminService from "../../../Services/AdminService";
import notificationService from "../../../Services/NotificationService";


function CompanyDetails(): JSX.Element {
    
    const params = useParams();
    const companyId = +params.companyId;
    
    const [company, setCompany] = useState<CompanyModel>();
    const navigate = useNavigate();
    
    async function deleteCompany() {
        
        if (window.confirm("Do you confirm deleting Company - "
            + company.name + "?")) {
            try {
                await adminService.deleteCompanyId(companyId);
                notificationService.success("Company deleted");
                navigate("/admin/all-companies");
            } catch (error: any){
                notificationService.error("company not deleted")
            }
        }
    }

    useEffect(() =>{
        adminService
            .getOneCompany(companyId)
            .then((p) => setCompany(p))
            .catch((e) => notificationService.error("Company with this id not found"));
    }, []);
    
    
    return (
        <div className="companyDetails">
            <h3>Company Details</h3>
			{company && (
                <>
                    <img src = {company.logoImage}/>
                    <h3>Id: {company.id}</h3>
                    <h3>Company Name: {company.name}</h3>
                    <h3>Email: {company.email}</h3>

                    <br /> <br />
                    <NavLink to="/admin/all-companies">Back to all Companies</NavLink>
                    <span> | </span>
                    <NavLink to="" onClick={deleteCompany}>Delete Company</NavLink>
                    <span> | </span>
                    <NavLink to={"/admin/edit-company/" + companyId} >Edit Company Details</NavLink>
                </>
            )}
        </div>
    );
}

export default CompanyDetails;
