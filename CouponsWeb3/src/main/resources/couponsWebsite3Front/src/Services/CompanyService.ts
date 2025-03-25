import axios from "axios";
import CompanyModel from "../Models/CompanyModel"
import appConfig from "../Utils/AppConfig";
import CouponModel from "../Models/CouponModel";
import Category from "../Models/Category";

// class CompaniesService{
//     public async getCompanyDetails(id: number): Promise<CompanyModel>{
//         const response = await axios.get<CompanyModel>(appConfig.apiAdminGetOneCompanyUrl + id);
//         const company = response.data;
//         return company;
// }
// }
// const companiesService = new CompaniesService();

// export default companiesService;

class CompanyService{
  getAllCouponsByCategory(selectedValue: string) {
      throw new Error("Method not implemented.");
  }
  
  public async getAllCoupons(): Promise<CouponModel[]> {
    const response = await axios.get<CouponModel[]>(appConfig.apiCompanyAllCouponsUrl);
    const coupons = response.data;
    return coupons;
  }
  public async getAllMaxPriceCoupons(maxPrice: number): Promise<CouponModel[]> {
    const response = await axios.get<CouponModel[]>(appConfig.apiCompanyMaxPriceCouponsUrl + maxPrice);
    const coupons = response.data;
    return coupons;
  }

  public async getCategoryCoupons(category: string): Promise<CouponModel[]> {
    
    const response = await axios.get<CouponModel[]>(appConfig.apiCompanyCategoryCouponsUrl + category);
    const coupons = response.data;
    return coupons;
  };

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
  };

  public async getCompanyDetails(): Promise<CompanyModel> {
    const response = await axios.get<CompanyModel>(appConfig.apiCompanyDetailsUrl);
    const company = response.data;
    return company;
  };

  public async getOneCoupon(id: number): Promise<CouponModel> {
    const response = await axios.get<CouponModel>(appConfig.apiCompanyGetCouponIdUrl + id);
    const coupon = response.data;
    return coupon;
  };

  public async deleteCouponId (id: number): Promise<void>{
     await axios.delete(appConfig.apiCompanyDeleteCouponIdUrl + id);
  };


}
const companyService = new CompanyService();
export default companyService;

export const getAllCoupons = async () => {
  return await axios.get<CouponModel[]>(appConfig.apiCompanyAllCouponsUrl);
};
// export const getCategoryCoupons = async (category: string) => {
//   return await axios.get<CouponModel[]>(appConfig.apiCompanyCategoryCouponsUrl + category);
// };