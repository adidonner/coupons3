import "./CouponsList.css";
import CouponModel from "../../../Models/CouponModel";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllCoupons } from "../../../Services/CompanyService";
import CouponCard from "../CouponCard/CouponCard";

function CouponsList(): JSX.Element {

    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    useEffect(()=>{
    (async () =>{   
        getAllCoupons()
        .then(res => setCoupons(res.data))
        .catch(() => alert("wait for a while and try again or login"))
        })();
    },[]);
    return (
        <div className="couponsList">
                {/* <span>Coupon List</span> */}
               <h3><NavLink to="/company/coupon/new">➕</NavLink> </h3>
            <h5>
            {coupons?.length > 0?
            <>
             {coupons.map(coupon =>
                <CouponCard key={coupon.id} coupon={coupon}/>
                )} 
             </> 
             :<span>No Coupon Registered at the moment</span>} 
            </h5> 
            <h5>*Press Coupon for Coupon Details</h5>
        </div>
    );
}

export default CouponsList;
