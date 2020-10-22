import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.qtbrz.mongodb.net/mongoportal?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  )
  .then(() => console.log('MongoDb connected!'))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

export default mongoose;
