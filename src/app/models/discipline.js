import mongoose from '../../database';

const DisciplineSchema = new mongoose.Schema({
  idTeacher: {
    type: String,
  },
  conteudo: [
    {
      name: {
        type: String,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],

  numberStudents: {
    type: Number,
  },
});

const Discipline = mongoose.model('Discipline', DisciplineSchema);

export default Discipline;
