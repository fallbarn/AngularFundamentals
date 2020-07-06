export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
}

export class User implements IUser {

  public id: number;
  public firstName: string;
  public lastName: string;
  public userName: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    userName: string
  )
  {
    this.firstName = firstName;
    this.id = id;
    this.lastName = lastName;
    this.userName = userName;
  }
}
