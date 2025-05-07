import "./CouponsListMaxPrice1.css";
import CouponModel from "../../../Models/CouponModel";
import { useEffect, useState } from "react";
import customerService from "../../../Services/CustomerService";
import CouponCard from "../../CompanyArea/CouponCard/CouponCard";
import { useParams } from "react-router-dom";

function CouponsListMaxPrice1(): JSX.Element {
    
    const params = useParams();
    
    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    useEffect(()=>{
        
        customerService.getAllMaxPriceCoupons(+params.maxPrice)
        .then((p) => setCoupons(p))
        .catch(() => alert("wait for a while and try again or login"))
    },[]);
    return (
        <div className="CouponsListMaxPrice1">
            <br/>
            <h5>
            {coupons?.length > 0?
            <>
             {coupons.map(coupon =>
                <CouponCard key={coupon.id} coupon={coupon}/>
                )} 
             </> 
             :<span>No Coupon  at this price Registered at the moment</span>} 
            </h5> 
            <h5>*Press Coupon for Coupon Details</h5>
        </div>
    );
}

export default CouponsListMaxPrice1;
