
export class User{

  public id: number;
  public name: string;
  public mobileNumber: string;
  public firstName: string;
  public lastName: string;
  public email : string;
  public password: string;
  public confirmpassword: string;
  public role : string;
  public statusCd: string;
  public statusMsg : string;
  public authStatus : string;



  constructor(id?: number,name?: string, firstName?: string, lastName?: string, mobileNumber?: string, email?: string, 
     password?: string,
     confirmpassword?: string,
     role?: string,
      statusCd?:string,statusMsg?:string, authStatus?:string){
        this.id = id || 0;
        this.name = name || '';
        this.mobileNumber = mobileNumber || '';
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.email = email || '';
        this.password = password || '';
        this.confirmpassword = confirmpassword || '';
        this.role = role || '';
        this.statusCd = statusCd || '';
        this.statusMsg = statusMsg || '';
        this.authStatus = authStatus || '';
  }

}
