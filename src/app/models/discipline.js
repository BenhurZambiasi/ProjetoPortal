import mongoose from '../../database';

const DisciplineSchema = new mongoose.Schema({
  idTeacher: {
    type: String,
    required: true,
  },
  content: [
    {
      name: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],

  numberStudents: {
    type: Number,
    required: true,
  },
});

const Discipline = mongoose.model('Discipline', DisciplineSchema);

export default Discipline;
