import ClientType from "./ClientType";

class UserModel {
    
    public id: number;
	public sub: number;
    public name: string;
	public firstName: string;
	public lastName: string;
	public userName: string;
	public logoImage: string;
    public clientType: ClientType;



    public constructor(id: number, sub: number, clientType: ClientType, 
         name: string, lastName: string, userName: string) {
            this.id = id;
            this.sub = sub;
            this.clientType = clientType;
            this.name = name;
            this.lastName = lastName;
            this.userName = userName;
    }
    
}

export default UserModel;
