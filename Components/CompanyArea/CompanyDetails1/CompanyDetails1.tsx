import { NavLink, useParams } from "react-router-dom";
import CompanyModel from "../../../Models/CompanyModel";
import { useEffect, useState } from "react";
import companyService from "../../../Services/CompanyService";
import "./CompanyDetails1.css";


function CompanyDetails1(): JSX.Element {
    const params = useParams();
    const companyId = +params.companyId;

    const[company, setCompany] = useState<CompanyModel>();
    useEffect(()=>{
        companyService
            .getCompanyDetails()
            .then((p) => setCompany(p))
            .catch((e) => alert(e.message));
    },[]);
    return (
        <div className="companyDetails1">
            {company && (
                <>                   
                    <img src = {company.logoImage}/>
                    <h3>Id: {company.id}</h3>
                    <h3>Company Name: {company.name}</h3>
                    <h3>Email: {company.email}</h3>
                    </>
            )}
          
        </div>
    );
}

export default CompanyDetails1;
