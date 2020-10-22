import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/projetoportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
})
  .then(() => console.log('MongoDb connected!'))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

export default mongoose;



//mongodb+srv://<username>:<password>@cluster0.qtbrz.mongodb.net/<dbname>?retryWrites=true&w=majority