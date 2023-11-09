interface IUserDTO {
  id?: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  avatar?: string;
  verification_code?: string;
  created_at?: Date;
}

export { IUserDTO };
