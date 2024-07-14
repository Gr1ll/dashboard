export interface Light {
  id: number;
  source: string;
  output: boolean;
  temperature: {
    tC: number;
    tF: number;
  };
}
