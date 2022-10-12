export interface IProduct {
  productId: string;
  description: string;
  price: number;
  ratings: number;
  origin: string;
}

let mockData: IProduct[] = [];

for (let i = 0; i < 30; i++) {
  const data = {
    productId: `id${i}`,
    description: `This is description${i}`,
    price: 12 + i,
    ratings: i < 5 ? i : i % 5,
    origin: "India",
  };
  mockData = [...mockData, data];
}

export default mockData;
