import { Request, Response, NextFunction } from "express";
import { auth } from "../lib/auth";
import { fromNodeHeaders } from "better-auth/node";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });

    if(!session) {
        res.status(401).json({
            message: "Not authenticated"
        });
        return;
    }

    req.user = session.user as any;
    req.session = session.session as any;

    next();
}