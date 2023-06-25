import ClientType from "./ClientType";

class CompanyModel {
	public id: number;
    public name: string;
    public email: string;
    public password: string;
    // public clientType: ClientType;
    public logoImage: string;
	



    // public constructor(id: number, email: string, password: string, name: string, clientType: ClientType, logoImage?: string) {
    //         this.id = id;
    //         this.email = email;
    //         this.password = password;
    //         this.name = name;
    //         this.clientType = ClientType.COMPANY;
    //         this.logoImage = logoImage;
    // }
    
}

export default CompanyModel;
