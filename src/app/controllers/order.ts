import { Request, Response } from "express";
import { prismaClient } from "../database";

export class OrderController {
    async list(request: Request, response: Response) {
        const orderController = await prismaClient.order.findMany();
        return response.json(orderController)
    }

    async handle(request: Request, response: Response) {
        const { productId, order_number, place, client, amount, price } = request.body
        const orderController = await prismaClient.order.create({
            data: {
                productId,
                order_number: order_number.padStart(5, '0'),
                place,
                client,
                amount,
                price
            }
        })
        return response.json(orderController)
    }

    async update(request: Request, response: Response) {
        const { id, productId, order_number, place, client, amount, price } = request.body
        const orderController = await prismaClient.order.update({
            data: {
                productId,
                order_number: order_number.padStart(5, '0'),
                place,
                client,
                amount,
                price
            },
            where: {
                id: id
            }
        })
        return response.json(orderController)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.body
        const orderController = await prismaClient.order.delete({
            where: {
                id: id
            }
        })
        return response.json(orderController)
    }
}