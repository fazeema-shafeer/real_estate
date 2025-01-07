import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if (initialized){
        console.log('Mongodb already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'next-estate',
            useNewUrlParser: true,
            useUnifiedTopology: true,


        });
        initialized = true;
        console.log('MongoDB Connected');
    } catch (error) {
        console.log('MongoDB Connection error', error);
    }


};