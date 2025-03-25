import ClientType from "./ClientType";

class CompanyModel {
	public id: number;
    public email: string;
    public password: string;
    public name: string;
    public logoImage: string;
    public clientType: ClientType;
	



    public constructor(id: number, email: string, password: string, name: string, 
                             logoImage: string, clientType: ClientType) {
            this.id = id;
            this.email = email;
            this.password = password;
            this.name = name;
            this.logoImage = logoImage;
            this.clientType = ClientType.COMPANY;
    }
    
}

export default CompanyModel;
