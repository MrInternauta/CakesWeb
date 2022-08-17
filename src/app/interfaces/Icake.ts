export interface ICakeBase {
  id: number;
  name: string;
  description: string;
  value: number;
  stock: number;
}

export interface ICakeComplement extends ICakeBase {
  baseId: number;
}
