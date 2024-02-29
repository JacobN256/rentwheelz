import type { NextApiRequest, NextApiResponse } from "next";

export interface Cars {
  id: string;
  model: string;
  brand: string;
  status: "AVAILABLE" | "UNAVAILABLE";
  registrationNumber: string;
  pricePerHour: number;
  thumbnail: string;
}

type ResponseData = {
  message: string;
  data?: {
    cars: Array<Cars>;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    res.status(200).json({
      message: "Get cars data successfully",
      data: {
        cars: [
          {
            id: "C101",
            model: "E220",
            brand: "Mercedes",
            status: "AVAILABLE",
            registrationNumber: "MH 12 AB 1234",
            pricePerHour: 200,
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
          },
          {
            id: "C102",
            model: "Prius",
            brand: "Toyota",
            status: "AVAILABLE",
            registrationNumber: "MH 12 AB 123456",
            pricePerHour: 120,
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
          },
          {
            id: "C103",
            model: "Highlander",
            brand: "Toyota",
            status: "AVAILABLE",
            registrationNumber: "MH 12 AB 123456934",
            pricePerHour: 250,
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
          },
          {
            id: "C104",
            model: "Corolla",
            brand: "Toyota",
            status: "AVAILABLE",
            registrationNumber: "MH 12 AB 12345678",
            pricePerHour: 100,
            thumbnail:
              "https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
          },
        ],
      },
    });
  }

  res.status(405).json({ message: "Failed to retrieve cars data" });
}
