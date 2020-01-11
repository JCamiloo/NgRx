export class User {

  public name: string;
  public email: string;
  public uid: string; 

  constructor(dataObj: UserObj ) {
    this.name = dataObj && dataObj.name || null;
    this.email = dataObj && dataObj.email || null;
    this.uid = dataObj && dataObj.uid || null;
  }
}

export interface UserObj {
  uid: string;
  email: string;
  name: string;
}