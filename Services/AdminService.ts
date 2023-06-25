import axios from "axios";
import appConfig from "../Utils/AppConfig";
import CompanyModel from "../Models/CompanyModel";
import CustomerModel from "../Models/CustomerModel";
import { addCompanyAction, addCustomerAction, adminStore, deleteCompanyIdAction, deleteCustomerIdAction, getAllCompaniesAction, getAllCustomersAction, updateCompanyIdAction, updateCustomerIdAction } from "../Redux/AdminState";

class AdminService{
  
  ////companies
  public async getAllCompanies(): Promise<CompanyModel[]> {
    if (adminStore.getState().companies.length === 0){
      const response = await axios.get<CompanyModel[]>(appConfig.apiAdminGetAllCompaniesUrl); //waiting
      const companies = response.data;

      // Redux - update global state about fetching all companies
      // companiesStore.dispatch({ type: AdminActionType.getAllCompanies, payload: companies });
      adminStore.dispatch(getAllCompaniesAction(companies))
      return companies;
    }
    
    // if there are companies in the Redux global state - return them
    return adminStore.getState().companies;
  };

 

  public async getOneCompany(id: number): Promise<CompanyModel> {
    const response = await axios.get<CompanyModel>(appConfig.apiAdminGetCompanyIdUrl + id);
    const company = response.data;
    return company;
  };
  
  public async addCompany(company: CompanyModel): Promise<void> {
    
    const formData = new FormData();
    
    formData.append("name", company.name);
    formData.append("email", company.email);
    formData.append("password", company.password);
    formData.append("logoImage", company.logoImage);
    // formData.append("client_type", company.clientType);
    
    const response = await axios.post<CompanyModel>(appConfig.apiAdminAddCompanyUrl, formData);
    const addedCompany = response.data;

    // Redux - update global state about a newly added product
    adminStore.dispatch(addCompanyAction(addedCompany))
  };
  
  public async updateCompanyId(company: CompanyModel): Promise<void> {
    // convert the JSON to FormData object
    const formData = new FormData();

    formData.append("id", company.id.toString());
    formData.append("name", company.name);
    formData.append("email", company.email);
    formData.append("logoImage", company.logoImage);
    // formData.append("logoImage", company.);
    
    const response = await axios.put<CompanyModel>(appConfig.apiAdminUpdateCompanyUrl, formData);
    const updatedCompany = response.data;

    // Redux
    adminStore.dispatch(updateCompanyIdAction(updatedCompany));
  };
  
  public async deleteCompanyId(id: number): Promise<void>{
    await axios.delete(appConfig.apiAdminDeleteCompanyIdUrl + id);
    // Redux
    adminStore.dispatch(deleteCompanyIdAction(id));
  };

  ///// customers
  public async getAllCustomers(): Promise<CustomerModel[]> {
    if (adminStore.getState().customers.length === 0){
      const response = await axios.get<CustomerModel[]>(appConfig.apiAdminGetAllCustomersUrl); //waiting
      const customers = response.data;
      
      // Redux - update global state about fetching all customers
      // companiesStore.dispatch({ type: AdminActionType.getAllCompanies, payload: companies });
      adminStore.dispatch(getAllCustomersAction(customers))
      return customers;
    }
    
    // if there are customers in the Redux global state - return them
    return adminStore.getState().customers;
  };
  
  public async getOneCustomer(id: number): Promise<CustomerModel> {
    const response = await axios.get<CustomerModel>(appConfig.apiAdminGetCustomerIdUrl + id );
    const customer = response.data;
    return customer;
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
    adminStore.dispatch(addCustomerAction(addedCustomer))
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
    
    const response = await axios.put<CustomerModel>(appConfig.apiAdminUpdateCustomerUrl, formData);
    const updatedCustomer = response.data;

    // Redux
    adminStore.dispatch(updateCustomerIdAction(updatedCustomer));
  };
  
  public async deleteCustomerId(id: number): Promise<void>{
    await axios.delete(appConfig.apiAdminDeleteCustomerIdUrl + id);
    adminStore.dispatch(deleteCustomerIdAction(id));
  }
}

const adminService = new AdminService();
export default adminService;