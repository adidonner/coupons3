import "./Coupons.css";
import { authStore } from "../../Redux/AuthState";
import { useEffect, useState } from "react";
import UserModel from "../../Models/UserModel";
import Category from "../../Models/Category";
import { NavLink } from "react-router-dom";

function Coupons(): JSX.Element {
    const [user, setUser] = useState<UserModel>();
    useEffect(()=>{
        setUser(authStore.getState().user);        
    }, []);

    const [couponId, setCouponId] = useState("");
    const [category, setCategory] = useState("")
    const [maxPrice, setMaxPrice] = useState("");
    
    return (
        <div className="coupons" >
            <h3>Welcome {''}{user && user.name}&copy;
            {''} representative
            </h3>
            
                <li style={{ listStyleType: 'disc'}}><NavLink to="/company/details">Get Company Details</NavLink></li>
                <li style={{ listStyleType: 'disc'}}><NavLink to="/company/all-coupons">Get Company Coupons</NavLink></li>
                <li style={{ listStyleType: 'disc'}}><NavLink to={"/company/coupon-id/" + couponId}>Get Coupon Id: </NavLink>
                    <input
                    type="number"
                    value={couponId}
                    onChange={(e) => setCouponId(e.target.value)}
                    min={1}
                    />
                 </li>
               <li style={{ listStyleType: 'disc'} }><NavLink to={"/company/category/" + category}>Get Category Coupons </NavLink>
                 <select
                 name="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                 >   
                        <option disabled value="">Select Category Type</option>
                        <option value={Category.CAMPING}>CAMPING</option>
                        <option value={Category.CLOTHINGS}>CLOTHINGS</option>
                        <option value={Category.ELECTRICITY}>ELECTRICITY</option>
                        <option value={Category.FOOD}>FOOD</option>
                        <option value={Category.RESTAURANTS}>RESTAURANTS</option>
                        <option value={Category.SPORTS}>SPORTS</option>
                        <option value={Category.VACATIONS}>VACATIONS</option>
                    </select>
                </li>
                
                <li style={{ listStyleType: 'disc'}}><NavLink to={"/company/maxPrice/" + maxPrice}>Get Company Coupons at max Price</NavLink>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    min={1}
                    />
                </li>

        </div>
    );
    
    }
export default Coupons;
