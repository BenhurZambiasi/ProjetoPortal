import mongoose from '../../database';

const DisciplineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  idTeacher: {
    type: String,
    required: true,
  },
  contents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content',
    },
  ],
  numberStudents: {
    type: Number,
    required: true,
  },
});

const Discipline = mongoose.model('Discipline', DisciplineSchema);

export default Discipline;
