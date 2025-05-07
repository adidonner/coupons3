import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import CompaniesList from "../../AdministrationArea/CompaniesList/CompaniesList";
import CompanyServices from "../../CompanyArea/Coupons";
import CustomerServices from "../../CustomerArea/CustomerHome";
import AdminServices from "../../AdministrationArea/AdminServices";
import CustomersList from "../../AdministrationArea/CustomersList/CustomersList";
import CompanyDetails from "../../AdministrationArea/CompanyDetails/CompanyDetails";
import CustomerDetails from "../../AdministrationArea/CustomerDetails/CustomerDetails";
import AddCompany from "../../AdministrationArea/AddCompany/AddCompany";
import CouponsList from "../../CompanyArea/CouponsList/CouponsList";
import EditCompany from "../../AdministrationArea/EditCompany/EditCompany";
import AddCustomer from "../../AdministrationArea/AddCustomer/AddCustomer";
import EditCustomer from "../../AdministrationArea/EditCustomer/EditCustomer";
import CouponDetails from "../../CompanyArea/CouponDetails/CouponDetails";
import EditCoupon from "../../CompanyArea/EditCoupon/EditCoupon";
import AddCoupon from "../../CompanyArea/AddCoupon/AddCoupon";
import CustomerDetails1 from "../../CustomerArea/CustomerDetails1/CustomerDetails1";
import CouponPurchased from "../../CustomerArea/CouponPurchase/CouponPurchase";
import CompanyDetails1 from "../../CompanyArea/CompanyDetails1/CompanyDetails1";
import CouponsListCategory from "../../CompanyArea/CouponsListCategory/CouponsListCategory";
import CouponsListMaxPrice from "../../CompanyArea/CouponsListMaxPrice/CouponsListMaxPrice";
import CustomerCoupons from "../../CustomerArea/CustomerCoupons/CustomerCoupons";
import AllCompaniesCoupons from "../../CustomerArea/AllCompaniesCoupons/AllCompaniesCoupons";
import CouponDetails1 from "../../CustomerArea/CouponDetails1/CouponDetails1";
import CouponsListCategory1 from "../../CustomerArea/CouponsListCategory1/CouponsListCategory1";
import CouponsListMaxPrice1 from "../../CustomerArea/CouponsListMaxPrice1/CouponsListMaxPrice1";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
             {/* default rout */}
             <Route path="/" element={<Navigate to={"/home"}/>} />
             {/* page not found */}
             <Route path="*" element={<PageNotFound/>} />
             
             
             <Route path="/customer" element={<CustomerServices />} />
             <Route path="/company" element={<CompanyServices />} />
             <Route path="/admin" element={<AdminServices />} />

             <Route path="/admin/all-companies" element={<CompaniesList />} />
             <Route path="/admin/company/details/:companyId" element={<CompanyDetails />} />
             <Route path="/admin/company/new" element={<AddCompany />} />
             <Route path="/admin/edit-company/:companyId" element={<EditCompany />} />
             <Route path="/admin/edit-customer/:customerId" element={<EditCustomer />} />

             <Route path="/admin/all-customers" element={<CustomersList />} />
             <Route path="/admin/customer/details/:customerId" element={<CustomerDetails />} />
             <Route path="/admin/customer/new" element={<AddCustomer />} />
           
             <Route path="/company/all-coupons" element={<CouponsList />} />
             <Route path="/company/coupon-id/:couponId" element={<CouponDetails />} />
             <Route path="/company/category/:category"  element={<CouponsListCategory />} />
             <Route path="/company/maxPrice/:maxPrice" element={<CouponsListMaxPrice />} />
            
             <Route path="/company/details" element={<CompanyDetails1 />} />
             <Route path="/company/coupon/details/:couponId" element={<CouponDetails />} />
             <Route path="/company/edit-coupon/:couponId" element={<EditCoupon />} />
             <Route path="/company/coupon/new" element={<AddCoupon />} />
       
             
             <Route path="/customer/details1" element={<CustomerDetails1 />} />
             <Route path="/customer/all-companies-coupons" element={<AllCompaniesCoupons />} />
             <Route path="/customer/coupon/purchased/:couponId" element={<CouponPurchased />} />
             <Route path="/customer/coupons" element={<CustomerCoupons />} />

             <Route path="/customer/coupon-id/:couponId" element={<CouponDetails1 />} />
             <Route path="/customer/category/:category"  element={<CouponsListCategory1 />} />
             <Route path="/customer/maxPrice/:maxPrice" element={<CouponsListMaxPrice1/>} />
        </Routes>
    );
}

export default Routing;
