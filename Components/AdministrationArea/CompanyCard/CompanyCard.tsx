import { NavLink } from "react-router-dom";
import CompanyModel from "../../../Models/CompanyModel";
import "./CompanyCard.css";

interface CompanyCardProps {
	company: CompanyModel
}

function CompanyCard(props: CompanyCardProps): JSX.Element {
    return (
        <div className="companyCard Box">
            <NavLink to={"/admin/company/details/" + props.company.id}>
                <img src= {props.company?.logoImage} />
            </NavLink>
			<p>{props.company?.id}</p>
			<p>{props.company?.name}</p>
			<p>{props.company?.email}</p>
        </div>
    );
}

export default CompanyCard;
