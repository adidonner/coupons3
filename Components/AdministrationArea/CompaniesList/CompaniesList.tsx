import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CompanyModel from "../../../Models/CompanyModel";
import notificationService from "../../../Services/NotificationService";
import adminService from "../../../Services/AdminService";
import CompanyCard from "../CompanyCard/CompanyCard";
import Loading from "../../SharedArea/Loading/Loading";
import "./CompaniesList.css";

function CompaniesList(): JSX.Element {

    const[companies, setCompanies] = useState<CompanyModel[]>();
    useEffect(()=>{
        (async () =>{
            adminService.getAllCompanies().then((arr) => {
                setCompanies(arr);
            }, (error) => {
                notificationService.error(error);
            });

        })();
        
          
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
                : <h2> No Companies Registered at the Moment</h2>}
                </h5>
            
            <br /> <br />
                <h5>
                {companies?.length === 0 && <Loading />}
                </h5>
                <h3>* Press Company Logo for Company Details</h3>
        </div>
    );
}

export default CompaniesList;
