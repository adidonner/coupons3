import "./CompaniesList.css";
import CompanyModel from "../../../Models/CompanyModel";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllCompanies } from "../../../Services/AdminService";
import CompanyCard from "../CompanyCard/CompanyCard";

function CompaniesList(): JSX.Element {

    const[companies, setCompanies] = useState<CompanyModel[]>();
    useEffect(()=>{
             getAllCompanies()
             .then(res => setCompanies(res.data))
             .catch(() => alert("wait for a while and try again or login"))
    }, []);

    return (
        <div className="companiesList">
              
             <NavLink to="/admin/company/new">➕ </NavLink> 
            <h5>
            {companies?.length > 0 ? 
            <>
            {companies.map(company=>
                <CompanyCard  key={company.id} company={company}/>
                )}
            </>
             : <span> No Companies Registered at the Moment</span>}
             </h5>
            <br /> <br />
            <h5>* Press Company Logo for Company Details</h5>
        </div>
    );
}

export default CompaniesList;
