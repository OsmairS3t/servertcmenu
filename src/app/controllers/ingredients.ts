import { Request, Response } from "express";
import { prismaClient } from "../database";

export class IngredientController {
    async list(request: Request, response: Response) {
        const ingredientController = await prismaClient.ingredient.findMany()
        response.json(ingredientController)
    }

    async handle(request: Request, response: Response) {
        const { description, price, productId } = request.body
        const ingredientController = await prismaClient.ingredient.create({
            data: {
                description,
                price,
                productId
            }
        })
        response.json(ingredientController)
    }

    async update(request: Request, response: Response) {
        const { id, description, price, productId } = request.body
        const ingredientController = await prismaClient.ingredient.update({
            data: {
                description,
                price,
                productId
            },
            where: {
                id: id
            }
        })
        response.json(ingredientController)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body
        const ingredientController = await prismaClient.ingredient.delete({
            where: {
                id: id
            }
        })
        response.json(ingredientController)
    }

}