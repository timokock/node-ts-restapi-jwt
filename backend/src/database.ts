import { connect } from 'mongoose';

export async function startConnection(){
    await connect(process.env.CONNECTION_STRING || '', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }).then(db => console.log('Database is connected')).catch(err => console.log(err));  
}