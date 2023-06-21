import { NavLink } from "react-router-dom";
import CouponModel from "../../../Models/CouponModel";
import "./CouponCard.css";

interface CouponCardProps {
	coupon: CouponModel
}

function CouponCard(props: CouponCardProps): JSX.Element {
    return (
        <div className="couponCard Box">
			<NavLink to={"/company/coupon/details/" + props.coupon.id}>
				<img src={props.coupon?.image} alt="coupon"/>
			</NavLink>
			<h5>Id: {props.coupon?.id}</h5>
			<h5>Company: {props.coupon.company.name}</h5>
			<h5>Category: {props.coupon?.category}</h5>
			<h5>Title: {props.coupon?.title}</h5>
			<h5>Amount: {props.coupon?.amount}</h5>
			<h5>StartDate: {props.coupon?.startDate.toString()}</h5>
			<h5>EndDate: {props.coupon?.endDate.toString()}</h5>
			<h5>Description: {props.coupon?.description}</h5>
			<h5>Amount: {props.coupon?.amount}</h5>
			<h5>Price: {props.coupon?.price}$</h5>
        </div>
    );
}

export default CouponCard;
