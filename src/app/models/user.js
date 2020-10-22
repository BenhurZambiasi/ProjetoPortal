import mongoose from '../../database';


const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    allowNull: false,
    autoIncrement: true,
  },
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  usertype: {
    type: String,
    required: true,
    maxlength: 1,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  }
});

const User = mongoose.model('User', UserSchema);

export default User;
