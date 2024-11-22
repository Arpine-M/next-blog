import mongoose, { mongo } from 'mongoose';

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);
    if(initialized) {
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'next-blog',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        initialized = true;

    } catch (error) {

    }
}