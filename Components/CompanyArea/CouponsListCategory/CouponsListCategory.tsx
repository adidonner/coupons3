import "./CouponsListCategory.css";
import CouponModel from "../../../Models/CouponModel";
import { useEffect, useState } from "react";
import companyService, { getAllCoupons } from "../../../Services/CompanyService";
import CouponCard from "../CouponCard/CouponCard";
import { useParams } from "react-router-dom";

function CouponsListCategory(): JSX.Element {

    const params = useParams();

    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    useEffect(()=>{
        companyService.getCategoryCoupons(params.category)
        .then((p) => setCoupons((p)))
        .catch(() => alert("wait for a while and try again or login"))
    },[]);
    return (
        <div className="CouponsListCategory">
            <br/>
            <h5>
            {coupons?.length > 0?
            <>
             {coupons.map(coupon =>
                <CouponCard key={coupon.id} coupon={coupon}/>
                )} 
             </> 
             :<span>No Coupon of this Category Registered at the moment</span>} 
            </h5> 
            <h5>*Press Coupon for Coupon Details</h5>
        </div>
    );
}

export default CouponsListCategory;
