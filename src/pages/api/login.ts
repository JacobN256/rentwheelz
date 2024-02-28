import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  data?: {
    userName: string;
    userEmail: string;
    proofId: string;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (
    req.method === "POST" &&
    req.body.email === "jacob.nix@method.com" &&
    req.body.password
  ) {
    res
      .status(200)
      .json({
        message: "Login successful",
        data: {
          userName: "Jacob Nix",
          userEmail: "jacob.nix@method.com",
          proofId: "1234",
        },
      });
  }

  res.status(405).json({ message: "Login Failed" });
}
