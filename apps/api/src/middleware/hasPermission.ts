import { getAuth } from "@clerk/express";
import { NextFunction, Request, Response } from "express";
const hasPermission = (req: Request, res: Response, next: NextFunction) => {
  const auth = getAuth(req);
  console.log("hasPermisssion", auth);

  // Handle if the user is not authorized
  if (!auth.has({ permission: "org:admin:example" })) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  return next();
};

export default hasPermission;
