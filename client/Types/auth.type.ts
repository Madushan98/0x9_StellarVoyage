export interface registerUser {
  name: string;
  email: string;
  password: string;
  natId: string;
};

export interface loginUser {
  email: string;
  password: string;
};