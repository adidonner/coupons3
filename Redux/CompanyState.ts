import { createStore } from "redux";
import CompanyModel from "../Models/CompanyModel";
import CouponModel from "../Models/CouponModel";

export class CompanyState {
    public company: CompanyModel;
    public coupons: CouponModel[] = [];
}

export enum  CompanyActionType{
    getCompanyDetails,
    getAllCoupons,
    addCoupon,
    updateCouponId,
    deleteCouponId
}

export interface CompanyAction{
    type: CompanyActionType; //action type
    payload: any; // action data
}

export function getCompanyDetailsAction(company: CompanyModel): CompanyAction {
    return { type: CompanyActionType.getCompanyDetails, payload: company }
} 
export function getAllCouponsAction(coupons: CouponModel[]): CompanyAction {
    return { type: CompanyActionType.getAllCoupons, payload: coupons }
} 

export function addCouponAction(coupon: CouponModel): CompanyAction {
    return { type: CompanyActionType.addCoupon, payload: coupon }
} 

export function updateCouponIdAction(coupon: CouponModel): CompanyAction {
    return { type: CompanyActionType.updateCouponId, payload: coupon }
} 

export function deleteCouponIdAction(id: number): CompanyAction {
    return { type: CompanyActionType.deleteCouponId, payload: id }
} 

export function companyReducer(
    currentState: CompanyState = new CompanyState(), 
    action: CompanyAction
    ): CompanyState {
    const newState = {...currentState };

        switch (action.type) {
            case CompanyActionType.getCompanyDetails: // here payload is a company
                newState.company= action.payload;
                break;
            case CompanyActionType.getAllCoupons: // here payload is all coupons
                newState.coupons = action.payload;
                break;
            case CompanyActionType.addCoupon:  // here payload is a single coupon to add
                newState.coupons.push(action.payload);
                break;
            case CompanyActionType.updateCouponId:  // here payload is a single coupon to update
                const indexToUpdate = newState.coupons.findIndex(
                    p => p.id === action.payload.id);
                if (indexToUpdate >= 0) newState.coupons[indexToUpdate] = action.payload;
                break;
            case CompanyActionType.deleteCouponId:
                const indexToDelete = newState.coupons.findIndex(
                    p => p.id === action.payload);
                if (indexToDelete >= 0) newState.coupons.splice(indexToDelete, 1);
                break;
            
        }

        return newState
}

export const companyStore = createStore(companyReducer);