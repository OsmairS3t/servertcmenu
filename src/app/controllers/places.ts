import { Request, Response } from "express";
import { prismaClient } from "../database";

export class PlaceController {
    async list(request: Request, response: Response) {
        const placeController = await prismaClient.place.findMany()
        response.json(placeController)
    }

    async handle(request: Request, response: Response) {
        const { description, id_user, client } = request.body;
        const placeController = await prismaClient.place.create({
            data: {
                description,
                id_user,
                client: client ?? 'User'
            }
        })
        response.json(placeController)
    }

    async update(request: Request, response: Response) {
        const { id, description, id_user, client } = request.body;
        const placeController = await prismaClient.place.update({
            data: {
                description,
                id_user,
                client
            },
            where: {
                id: id
            }
        })
        response.json(placeController)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body;
        const placeController = await prismaClient.place.delete({
            where: {
                id: id
            }
        })
        response.json(placeController)
    }
}