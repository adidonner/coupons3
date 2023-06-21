import { useEffect, useState } from "react";
import "./CustomerHome.css";
import UserModel from "../../Models/UserModel";
import { authStore } from "../../Redux/AuthState";
import { NavLink } from "react-router-dom";
import Category from "../../Models/Category";

function CustomerHome(): JSX.Element {
    const [user, setUser] = useState<UserModel>();

    useEffect(()=>{
        setUser(authStore.getState().user);        
    }, []);
    
    const [couponId, setCouponId] = useState("");
    const [category, setCategory] = useState("")
    const [maxPrice, setMaxPrice] = useState("");
    
    return (
        <div className="CustomerHome">
            <br />
			Hello 
            {user &&  
                <>
                <span>{''} {user.userName}!!</span>
                <div>⭐⭐⭐⭐⭐</div>
                <br/>
                </>
            }
            <li style={{ listStyleType: 'disc'}}><NavLink to="/customer/details1">Get Customer Details</NavLink></li>
            <li style={{ listStyleType: 'disc'}}><NavLink to="/customer/all-companies-coupons">SHOPPING YAHH!</NavLink></li>
            <li style={{ listStyleType: 'disc'}}><NavLink to="/customer/coupons">Client's Coupons</NavLink></li>
            <li style={{ listStyleType: 'disc'}}><NavLink to={"/customer/coupon-id/" + couponId}>Look for coupon no. </NavLink>
                <input
                    type="number"
                    value={couponId}
                    onChange={(e) => setCouponId(e.target.value)}
                    min={1}
                 />
            </li>
            <li style={{ listStyleType: 'disc'}}><NavLink to={"/customer/category/" + category}>Get Category Coupons:</NavLink>
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
            <li style={{ listStyleType: 'disc'}}><NavLink to={"/customer/maxPrice/" + maxPrice}>Max Prise Coupons:</NavLink>
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

export default CustomerHome;
