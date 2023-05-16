import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI;

export default function connectMontoDB(): void {
    if (mongoURI) {
        mongoose.connect(mongoURI)
    } else {
        console.log("Failed to connect to MOngoDB")
    }
}