export interface IUser {
  id: number;
  fullname: string;
  telefono: string;
  direccion: string;
  di: string;
  email: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}
export interface IUserSave {
  fullname: string;
  telefono: string;
  direccion: string;
  di: string;
  email: string;
  password: string;
  image_url: string;
}
