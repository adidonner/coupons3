import axios from "axios";
import CompanyModel from "../Models/CompanyModel"
import CouponModel from "../Models/CouponModel";
import appConfig from "../Utils/AppConfig";
import { addCouponAction, companyStore, deleteCouponIdAction, getAllCouponsAction, updateCouponIdAction } from "../Redux/CompanyState";

class CompanyService{
  
  public async getCompanyDetails(): Promise<CompanyModel> {
    const response = await axios.get<CompanyModel>(appConfig.apiCompanyDetailsUrl);
    const company = response.data;
    return company;
  };
  
  public async getAllCoupons(): Promise<CouponModel[]> {
   if (companyStore.getState().coupons.length === 0){

     const response = await axios.get<CouponModel[]>(appConfig.apiCompanyAllCouponsUrl);
     const coupons = response.data;
     companyStore.dispatch(getAllCouponsAction(coupons))
     return coupons;
    }
    return companyStore.getState().coupons;
  }
 
  public async getOneCoupon(id: number): Promise<CouponModel> {
    const response = await axios.get<CouponModel>(appConfig.apiCompanyGetCouponIdUrl + id);
    const coupon = response.data;
    return coupon;
  };

  public async getCategoryCoupons(category: string): Promise<CouponModel[]> {
    const response = await axios.get<CouponModel[]>(appConfig.apiCompanyCategoryCouponsUrl + category);
    const coupons = response.data;
    return coupons;
  };
 
  public async getAllMaxPriceCoupons(maxPrice: number): Promise<CouponModel[]> {
    const response = await axios.get<CouponModel[]>(appConfig.apiCompanyMaxPriceCouponsUrl + maxPrice);
    const coupons = response.data;
    return coupons;
  }
  
  public async addCoupon(coupon: CouponModel): Promise<void> {
    const formData = new FormData();
    
    formData.append("category", coupon.category);
    formData.append("title", coupon.title);
    formData.append("description", coupon.description);
    formData.append("startDate", coupon.startDate.toString());
    formData.append("endDate", coupon.endDate.toString());
    formData.append("amount", coupon.amount.toString());
    formData.append("price", coupon.price.toString());
    formData.append("image", coupon.image);
        
    const response = await axios.post<CouponModel>(appConfig.apiCompanyAddCouponUrl , formData);
    
    const addedCoupon = response.data;
    companyStore.dispatch(addCouponAction(addedCoupon))
  };
  public async updateCouponId(coupon: CouponModel): Promise<void> {
    const formData = new FormData();

    formData.append("id", coupon.id.toString());
    formData.append("category", coupon.category);
    formData.append("title", coupon.title);
    formData.append("description", coupon.description);
    formData.append("startDate", coupon.startDate.toString());
    formData.append("endDate", coupon.endDate.toString());
    formData.append("amount", coupon.amount.toString());
    formData.append("price", coupon.price.toString());
    formData.append("image", coupon.image);
    
    const response = await axios.put<CouponModel>(appConfig.apiCompanyUpdateCouponUrl, formData);
    const updatedCoupon = response.data;

    companyStore.dispatch(updateCouponIdAction(updatedCoupon));
  };

  public async deleteCouponId (id: number): Promise<void>{
     await axios.delete(appConfig.apiCompanyDeleteCouponIdUrl + id);

     companyStore.dispatch(deleteCouponIdAction(id));
  };


}

export const getAllCoupons = async () => {
  return await axios.get<CouponModel[]>(appConfig.apiCompanyAllCouponsUrl);
};

const companyService = new CompanyService();
export default companyService;