import mongoose from 'mongoose';

const createConnection = (mongoDatabaseURI = 'mongodb://localhost:27017/world_cups') => {
  mongoose.connect(mongoDatabaseURI);
};

export default createConnection;
