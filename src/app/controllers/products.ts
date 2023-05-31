import { Request, Response } from 'express'
import { prismaClient } from '../database'

export class ProductController {
    async list(request: Request, response: Response) {
        const productController = await prismaClient.product.findMany({
            include: {
                ingredients: true
            }
        })
        response.json(productController)
    }

    async handle(request: Request, response: Response) {
        const { name, price, image, active, ingredients, time } = request.body
        const productController = await prismaClient.product.create({
            data: {
                name,
                price,
                image,
                active,
                time,
                ingredients: {
                    create: [
                        {
                            ingredient: {
                                create: { description: 'Farinha de Trigo' },
                            }
                        },
                        {
                            ingredient: {
                                create: { description: 'Sal' },
                            }
                        },

                    ]
                }
            }
        })
        // ingredients.forEach(ing => {})
        response.json(productController)
    }

    async update(request: Request, response: Response) {
        const { id, name, price, image, active, ingredients, time } = request.body
        const productController = await prismaClient.product.update({
            data: {
                name,
                price,
                image,
                active,
                time
            },
            where: {
                id: id
            }
        })
        response.json(productController)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body
        const productController = await prismaClient.product.delete({
            where: {
                id: id
            }
        })
        response.json(productController)
    }
}