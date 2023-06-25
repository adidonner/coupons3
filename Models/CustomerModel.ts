import ClientType from "./ClientType";

class CustomerModel {
	public id: number;
    public email: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public userName: string;
    public clientType: ClientType;
	

    public constructor(id: number, email: string, password: string, firstName: string,
        lastName: string,userName: string, clientType: ClientType) {
            this.id = id;
            this.email = email;
            this.password = password;
            this.firstName = firstName;
            this.lastName = lastName;
            this.userName = userName;
            this.clientType = ClientType.CUSTOMER;
    }
    
}

export default CustomerModel;
