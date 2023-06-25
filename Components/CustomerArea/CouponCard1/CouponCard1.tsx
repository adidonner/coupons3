import { NavLink } from "react-router-dom";
import CouponModel from "../../../Models/CouponModel";
import "./CouponCard1.css";

interface CouponCardProps {
	coupon: CouponModel
}

function CouponCard1(props: CouponCardProps): JSX.Element {
    return (
        <div className="couponCard1 Box">
			<NavLink to={"/customer/coupon/purchased/" + props.coupon.id}>
				<img src={props.coupon?.image} alt="image"/>
			</NavLink>
			<h5>Id: {props.coupon?.id}</h5>
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

export default CouponCard1;
