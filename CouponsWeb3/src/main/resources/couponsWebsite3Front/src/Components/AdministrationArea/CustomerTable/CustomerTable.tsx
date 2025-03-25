import { NavLink } from "react-router-dom";
import CustomerModel from "../../../Models/CustomerModel";
import "./CustomerTable.css";

interface customerTableProps {
	customer: CustomerModel
}

function CustomerTable(props: customerTableProps): JSX.Element {
    return (
        <div className="customerTable">
            <table>
                <tr>
                    <td>
                    <NavLink to={"/admin/customer/details/" + props.customer.id}>                       
                            {props.customer?.id}
                    </NavLink>
                    </td>
                    <td>{props.customer?.firstName}</td>
                    <td>{props.customer?.lastName}</td>
                    <td>{props.customer?.userName}</td>
                    <td>{props.customer?.email}</td>
                </tr>
            </table>
        </div>
    );
}

export default CustomerTable;
