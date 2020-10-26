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
  numberStudents: {
    type: Number,
    required: true,
  },
  contents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content',
    },
  ],
});

const Discipline = mongoose.model('Discipline', DisciplineSchema);

export default Discipline;
