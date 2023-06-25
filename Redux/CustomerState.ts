import { createStore } from "redux";
import CompanyModel from "../Models/CompanyModel";
import CouponModel from "../Models/CouponModel";
import CustomerModel from "../Models/CustomerModel";

export class CustomerState {
    public customer: CustomerModel;
    public coupons: CouponModel[] = [];
}

export enum CustomerActionType{
    getCustomerDetails,
    getAllCompaniesCoupons, //shopping
    purchaseCoupon,
    getAllCustomerCoupons,
    }

export interface CustomerAction{
    type: CustomerActionType; //action type
    payload: any; // action data
}
export function getCustomerDetailsAction(customer: CustomerModel): CustomerAction {
    return { type: CustomerActionType.getCustomerDetails, payload: customer }
} 
export function getAllCompaniesCouponsAction(coupons: CouponModel[]): CustomerAction {
    return { type: CustomerActionType.getAllCompaniesCoupons, payload: coupons }
} 

export function purchaseCouponAction(coupon: CouponModel): CustomerAction {
    return { type: CustomerActionType.purchaseCoupon, payload: coupon }
} 
export function getAllCustomerCoupons(coupons: CouponModel[]): CustomerAction {
    return { type: CustomerActionType.getAllCompaniesCoupons, payload: coupons }
} 

export function customerReducer(
    currentState: CustomerState = new CustomerState(), 
    action: CustomerAction
    ): CustomerState {
    const newState = {...currentState };

        switch (action.type) {
            case CustomerActionType.getCustomerDetails: // here payload is a customer
                newState.customer= action.payload;
                break;
            case CustomerActionType.getAllCompaniesCoupons: // here payload is all coupons
                newState.coupons = action.payload;
                break;
                case CustomerActionType.purchaseCoupon:  // here payload is a single coupon purchase
                newState.coupons.push(action.payload);
                break;
            case CustomerActionType.getAllCustomerCoupons: // here payload is all coupons
                newState.coupons = action.payload;
                break;
                
        }

        return newState
}

export const customerStore = createStore(customerReducer);

