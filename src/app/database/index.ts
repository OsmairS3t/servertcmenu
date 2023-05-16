import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI;

export default function connectMontoDB(): void {
    if (mongoURI) {
        mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }, console.log("Database is running."))
    } else {
        console.log("Failed to connect to MOngoDB")
    }
}