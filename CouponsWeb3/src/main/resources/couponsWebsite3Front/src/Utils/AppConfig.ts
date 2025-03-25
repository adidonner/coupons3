// general configuration
class Config {
    
}

class AppConfig {
    public loginUrl = "http://localhost:8080/auth/login/";
    public apiAppUrl = "http://localhost:8080/api/app";
    public apiAdminUrl = "http://localhost:8080/api/admin";
    public apiCompanyUrl = "http://localhost:8080/api/company";
    public apiCustomerUrl = "http://localhost:8080/api/customer";
    
    public apiCustomerPurchaseCouponUrl = this.apiCustomerUrl + "/purchase-coupon/";
    public apiCustomerAllCustomerCouponsUrl = this.apiCustomerUrl + "/get-customer-coupons";
    public apiCustomerGetCouponIdUrl = this.apiCustomerUrl + "/get-coupon/";
    public apiCustomerDetailsUrl = this.apiCustomerUrl + "/details";
    public apiCustomerAllCompaniesCouponsUrl = this.apiCustomerUrl + "/all-companies-coupons";

    public apiCustomerCategoryCouponsUrl = this.apiCustomerUrl + "/category-coupons?category=";
    public apiCustomerMaxPriceCouponsUrl = this.apiCustomerUrl + "/max-price-coupons?maxPrice=";
 
    public apiCustomerDeleteCouponIdUrl = this.apiCustomerUrl +"/delete-coupon-id/";
   
    public apiCompanyUpdateCouponUrl = this.apiCompanyUrl + "/update-coupon";
    public apiCompanyAddCouponUrl = this.apiCompanyUrl + "/add-coupon";
    public apiCompanyMaxPriceCouponsUrl = this.apiCompanyUrl + "/max-price-coupons?maxPrice=";
    public apiCompanyDetailsUrl = this.apiCompanyUrl + "/details";
    public apiCompanyCouponIdUrl = this.apiCompanyUrl + "/coupon-id/";
    public apiCompanyCategoryCouponsUrl = this.apiCompanyUrl + "/category-coupons?category=";
    public apiCompanyAllCouponsUrl = this.apiCompanyUrl + "/all-coupons";
    public apiCompanyGetCouponIdUrl = this.apiCompanyUrl + "/coupon-id/";
    public apiCompanyDeleteCouponIdUrl = this.apiCompanyUrl +"/delete-coupon-id/";


    public apiAdminUpdateCustomerUrl = this.apiAdminUrl + "/update-customer/";
    public apiAdminUpdateCompanyUrl = this.apiAdminUrl + "/update-company/";
    public apiAdminAddCustomerUrl = this.apiAdminUrl + "/add-customer";
    public apiAdminAddCompanyUrl = this.apiAdminUrl + "/add-company";
    public apiAdminGetCustomerIdUrl = this.apiAdminUrl + "/get-customer-id/";
    public apiAdminGetCompanyIdUrl = this.apiAdminUrl + "/get-company-id/";
    public apiAdminGetAllCustomersUrl = this.apiAdminUrl + "/all-customers";
    public apiAdminGetAllCompaniesUrl = this.apiAdminUrl + "/all-companies";
    public apiAdminDeleteCustomerIdUrl = this.apiAdminUrl + "/delete-customer-id/";
    public apiAdminDeleteCompanyIdUrl = this.apiAdminUrl + "/delete-company-id/";
    
}

const appConfig = new AppConfig(); // Singleton

export default appConfig;

