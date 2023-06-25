import axios from "axios";
import customerModel from "../Models/CustomerModel"
import CouponModel from "../Models/CouponModel";
import appConfig from "../Utils/AppConfig";



class CustomerService{
  public async getCustomerDetails(): Promise<customerModel> {
    const response = await axios.get<customerModel>(appConfig.apiCustomerDetailsUrl);
    const customer = response.data;
    return customer;
  };
  
  public async getAllCompaniesCoupons(): Promise<CouponModel[]> {  //shopping
    const response = await axios.get<CouponModel[]>(appConfig.apiCustomerAllCompaniesCouponsUrl);
    const coupons = response.data;
    return coupons;
}

public async purchaseCoupon(couponId: number): Promise<void> {        
  const response = await axios.post<CouponModel>(appConfig.apiCustomerPurchaseCouponUrl + couponId);
  
  const addedCoupon = response.data;
};
 
public async getAllCustomerCoupons(): Promise<CouponModel[]> {
    const response = await axios.get<CouponModel[]>(appConfig.apiCustomerAllCustomerCouponsUrl);
    const coupons = response.data;
    return coupons;
}

  public async getOneCoupon(couponId: number): Promise<CouponModel> {
    const response = await axios.get<CouponModel>(appConfig.apiCustomerGetCouponIdUrl + couponId);
    const coupon = response.data;
    return coupon;
  };
  
  public async getCategoryCoupons(category: string): Promise<CouponModel[]> {
    
    const response = await axios.get<CouponModel[]>(appConfig.apiCustomerCategoryCouponsUrl + category);
    const coupons = response.data;
    return coupons;
  };

  public async getAllMaxPriceCoupons(maxPrice: number): Promise<CouponModel[]> {
    const response = await axios.get<CouponModel[]>(appConfig.apiCustomerMaxPriceCouponsUrl + maxPrice);
    const coupons = response.data;
    return coupons;
  }
}

const customerService = new CustomerService();
export default customerService;

