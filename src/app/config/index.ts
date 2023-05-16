import express, { Express } from 'express'
import cors from 'cors'
import routes from '../routes'
import connectMontoDB from '../database'

export default function appConfig(app: Express): void {
    connectMontoDB()
    app.use(cors())
    app.use(express.json())
    app.use(routes)
}