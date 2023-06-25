import CouponModel from "../Models/CouponModel";
import CustomerModel from "../Models/CustomerModel";

export class CustomerState {
    public customers: CustomerModel[] = [];
    public coupons: CouponModel[] = [];
}

export enum CustomerActionType{
    getCustomerDetails,
    getAllCompaniesCoupons, //shopping
    purchaseCoupon,
    getAllCustomerCoupons,
    getOneCoupon,
    getCategoryCoupons,
    getAllMaxPriceCoupons
}

export interface CustomerAction{
    type: CustomerActionType; //action type
    payload: any; // action data
}