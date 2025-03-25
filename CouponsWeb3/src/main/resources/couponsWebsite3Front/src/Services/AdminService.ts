import axios from "axios";
import appConfig from "../Utils/AppConfig";
import CompanyModel from "../Models/CompanyModel";
import CustomerModel from "../Models/CustomerModel";
import { log } from "console";

class AdminService{

  //company
  public async getOneCompany(id: number): Promise<CompanyModel> {
    const response = await axios.get<CompanyModel>(appConfig.apiAdminGetCompanyIdUrl + id);
    const company = response.data;
    return company;
  };

  public async deleteCompanyId(id: number): Promise<void>{
    await axios.delete(appConfig.apiAdminDeleteCompanyIdUrl + id);
  };
  
  public async addCompany(company: CompanyModel): Promise<void> {
    
    const formData = new FormData();
    
    formData.append("name", company.name);
    formData.append("email", company.email);
    formData.append("password", company.password);
    formData.append("logoImage", company.logoImage);
    formData.append("client_type", company.clientType);
    
    const response = await axios.post<CompanyModel>(appConfig.apiAdminAddCompanyUrl, formData);
    const addedCompany = response.data;
  };

  
  
  
  // customer
  public async getOneCustomer(id: number): Promise<CustomerModel> {
    const response = await axios.get<CustomerModel>(appConfig.apiAdminGetCustomerIdUrl + id );
    const customer = response.data;
    return customer;
  };
  
  public async deleteCustomer(id: number): Promise<void>{
    await axios.delete(appConfig.apiAdminDeleteCustomerIdUrl + id);
  }
  public async getAllCustomers(): Promise<CustomerModel[]> {
    const response = await axios.get<CustomerModel[]>(appConfig.apiAdminGetAllCustomersUrl);
        const customers = response.data;
        return customers;
  };
  public async addCustomer(customer: CustomerModel): Promise<void> {
    
    const formData = new FormData();
    
    formData.append("firstName", customer.firstName);
    formData.append("lastName", customer.lastName);
    formData.append("userName", customer.userName);
    formData.append("email", customer.email);
    formData.append("password", customer.password);
    formData.append("client_type", customer.clientType);
    
    const response = await axios.post<CustomerModel>(appConfig.apiAdminAddCustomerUrl, formData);
    const addedCustomer = response.data;
  };

  public async updateCompanyId(company: CompanyModel): Promise<void> {
    // convert the JSON to FormData object
    const formData = new FormData();

    formData.append("id", company.id.toString());
    formData.append("name", company.name);
    formData.append("email", company.email);
    formData.append("logoImage", company.logoImage);
    
    const response = await axios.put<CompanyModel>(appConfig.apiAdminUpdateCompanyUrl, formData);
    const updatedCompany = response.data;
  };

  public async updateCustomerId(customer: CustomerModel): Promise<void> {
    // convert the JSON to FormData object
    const formData = new FormData();
  
    formData.append("id", customer.id.toString());
    formData.append("firstName", customer.firstName);
    formData.append("lastName", customer.lastName);
    formData.append("userName", customer.userName);
    formData.append("email", customer.email);
    formData.append("password", customer.password);
    
    const response = await axios.put<CompanyModel>(appConfig.apiAdminUpdateCustomerUrl, formData);
    const updatedCompany = response.data;
  };
}
const adminService = new AdminService();

export default adminService;


export const getAllCustomers = async () => {
  return await axios.get<CustomerModel[]>(appConfig.apiAdminGetAllCustomersUrl);
};
export const getAllCompanies = async () => {
  return await axios.get<CompanyModel[]>(appConfig.apiAdminGetAllCompaniesUrl);
};



