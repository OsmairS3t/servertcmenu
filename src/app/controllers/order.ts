import { Request, Response } from "express";
import { prismaClient } from "../database";

export class OrderController {
    async list(request: Request, response: Response) {
        const orderController = prismaClient.order.findMany()
        response.json(orderController)
    }

    async handle(request: Request, response: Response) {
        const { productId, order, place, cliente, amount, price } = request.body
        const orderController = prismaClient.order.create({
            data: {
                productId,
                order,
                place,
                cliente,
                amount,
                price
            }
        })
        response.json(orderController)
    }
}