import "./CouponsListCategory1.css";
import CouponModel from "../../../Models/CouponModel";
import { useEffect, useState } from "react";
import companyService, { getAllCoupons } from "../../../Services/CompanyService";
import { useParams } from "react-router-dom";
import CouponCard from "../../CompanyArea/CouponCard/CouponCard";
import customerService from "../../../Services/CustomerService";
import CouponCard1 from "../CouponCard1/CouponCard1";

function CouponsListCategory1(): JSX.Element {

    const params = useParams();

    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    useEffect(()=>{
        customerService.
        getCategoryCoupons(params.category)
        .then((p) => setCoupons((p)))
        .catch(() => alert("wait for a while and try again or login"))
    },[]);
    return (
        <div className="CouponsListCategory1">
            <br/>
            <h5>
            {coupons?.length > 0?
            <>
             {coupons.map(coupon =>
                <CouponCard1 key={coupon.id} coupon={coupon}/>
                )} 
             </> 
             :<span>No Coupon of this Category Registered at the moment</span>} 
            </h5> 
            <h5>*Press Coupon for Coupon Details</h5>
        </div>
    );
}

export default CouponsListCategory1;
