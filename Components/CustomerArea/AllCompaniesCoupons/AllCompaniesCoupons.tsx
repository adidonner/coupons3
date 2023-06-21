import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CouponModel from "../../../Models/CouponModel";
import customerService from "../../../Services/CustomerService";
import CouponCard1 from "../CouponCard1/CouponCard1";
import "./AllCompaniesCoupons.css";

function AllCompaniesCoupons(): JSX.Element {

    const [coupons, setCoupons] = useState<CouponModel[]>([]);

    useEffect(() => {

        (async () => { 
            customerService.getAllCompaniesCoupons().then((arr)=> {
                setCoupons(arr);
            }, (error) => {
                alert(error.message);
            });
        })(); 

    }, []);
    return (
        <div className="AllCompaniesCoupons">
			<h3>Available Coupons </h3>
                <h5>* Press on a Coupon to Buy *</h5>
			
            <h5>
            {coupons?.length > 0 ? 
            <>
            {coupons.map(coupon=>
                <CouponCard1  key={coupon.id} coupon={coupon}/>
                )}
            </>
             : <span> No Coupons Registered at the Moment</span>}
             </h5>
            <br /> <br />
        </div>
    );
}

export default AllCompaniesCoupons;
