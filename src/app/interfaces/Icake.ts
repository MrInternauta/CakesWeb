export interface ICakeBase {
  id: number;
  name: string;
  description: string;
  value: number;
  stock: number;
}

export interface ICakeComplement extends ICakeBase {
  baseId: number;
  image?: string;
}

export interface ICakeSelected {
  title?: string;
  base?: ICakeBase;
  complement?: ICakeComplement;
  othersComplements?: ICakeBase[];
}
