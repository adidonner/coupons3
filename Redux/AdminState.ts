import { createStore } from "redux";
import CompanyModel from "../Models/CompanyModel";
import CustomerModel from "../Models/CustomerModel";

export class AdminState {
    public companies: CompanyModel[] = [];
    public customers: CustomerModel[] = [];
}

export enum AdminActionType{
    getAllCompanies,
    addCompany,
    updateCompanyId,
    deleteCompanyId,
    getAllCustomers,
    addCustomer,
    updateCustomerId,
    deleteCustomerId
}

export interface AdminAction{
    type: AdminActionType; //action type
    payload: any; // action data
}

export function getAllCompaniesAction(companies: CompanyModel[]): AdminAction {
    return { type: AdminActionType.getAllCompanies, payload: companies }
} 

export function addCompanyAction(company: CompanyModel): AdminAction {
    return { type: AdminActionType.addCompany, payload: company }
} 

export function updateCompanyIdAction(company: CompanyModel): AdminAction {
    return { type: AdminActionType.updateCompanyId, payload: company }
} 

export function deleteCompanyIdAction(id: number): AdminAction {
    return { type: AdminActionType.deleteCompanyId, payload: id }
} 

export function getAllCustomersAction(customers: CustomerModel[]): AdminAction {
    return { type: AdminActionType.getAllCustomers, payload: customers }
} 

export function addCustomerAction(customer: CustomerModel): AdminAction {
    return { type: AdminActionType.addCustomer, payload: customer }
} 

export function updateCustomerIdAction(customer: CustomerModel): AdminAction {
    return { type: AdminActionType.updateCustomerId, payload: customer }
} 

export function deleteCustomerIdAction(id: number): AdminAction {
    return { type: AdminActionType.deleteCustomerId, payload: id }
} 

export function adminReducer(
    currentState: AdminState = new AdminState(), 
    action: AdminAction
    ): AdminState {
    const newState = {...currentState };

        switch (action.type) {
            case AdminActionType.getAllCompanies: // here payload is all companies
                newState.companies = action.payload;
                break;
            case AdminActionType.addCompany:  // here payload is a single company to add
                newState.companies.push(action.payload);
                break;
            case AdminActionType.updateCompanyId:  // here payload is a single company to update
                const indexToUpdate = newState.companies.findIndex(
                    p => p.id === action.payload.id);
                if (indexToUpdate >= 0) newState.companies[indexToUpdate] = action.payload;
                break;
            case AdminActionType.deleteCompanyId:
                const indexToDelete = newState.companies.findIndex(
                    p => p.id === action.payload);
                if (indexToDelete >= 0) newState.companies.splice(indexToDelete, 1);
                break;
            case AdminActionType.getAllCustomers: 
                newState.customers = action.payload;
                break;
            case AdminActionType.addCustomer:  
                newState.customers.push(action.payload);
                break;
            case AdminActionType.updateCustomerId: 
                const indexToUpdate1 = newState.customers.findIndex(
                    p => p.id === action.payload.id);
                if (indexToUpdate1 >= 0) 
                    newState.customers[indexToUpdate1] = action.payload;
                break;
            case AdminActionType.deleteCustomerId:
                const indexToDelete1 = newState.customers.findIndex(
                    p => p.id === action.payload);
                if (indexToDelete1 >= 0) newState.customers.splice(indexToDelete1, 1);
                break;
        }

        return newState
}

export const adminStore = createStore(adminReducer);