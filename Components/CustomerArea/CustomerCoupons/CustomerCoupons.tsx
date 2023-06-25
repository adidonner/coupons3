import { useEffect, useState } from "react";
import CouponModel from "../../../Models/CouponModel";
import "./CustomerCoupons.css";
import customerService from "../../../Services/CustomerService";
import CouponCard1 from "../CouponCard1/CouponCard1";

function CustomerCoupons(): JSX.Element {
    const [coupons, setCoupons] = useState<CouponModel[]>([]);
    useEffect(()=>{
    (async () =>{   
        customerService.getAllCustomerCoupons()
        .then((p) => setCoupons(p))
        .catch(() => alert("wait for a while and try again or login"))
        })();
    },[]);
    return (
        <div className="CustomerCoupons">
			<h3>Your Purchased Coupons are: </h3>

            <h5>
            {coupons?.length > 0 ? 
            <>
            {coupons.map(coupon=>
                <CouponCard1  key={coupon.id} coupon={coupon}/>
                )}
            </>
             : <span> No Coupons Registered at the Moment</span>}
             </h5>
        </div>
    );
}

export default CustomerCoupons;
