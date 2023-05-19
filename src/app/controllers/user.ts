import { Request, Response } from "express";
import { prismaClient } from "../database";

export class UserController {
  async list(request: Request, response: Response) {
    const user = await prismaClient.user.findMany()
    response.json(user)
  }

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

  async update(request: Request, response: Response) {
    const { id, name, email, avatar } = request.body;
    const user = await prismaClient.user.update({
      data: {
        name,
        email,
        avatar
      },
      where: {
        id: id
      }
    })
    response.json(user)
  }

  async delete(request: Request, response: Response) {
    const { id } = request.body;
    const user = await prismaClient.user.delete({
      where: {
        id: id
      }
    })
    response.json(user)
  }
}