import { Request, Response } from "express";
import { prismaClient } from "../database";

export class UserController {
  async handle(request: Request, response: Response) {
    const { name, email, avatar } = request.body;
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        avatar
      }
    })
    response.json(user)
  }
  async list(request: Request, response: Response) {
    const user = await prismaClient.user.findMany
    response.json(user)
  }
}