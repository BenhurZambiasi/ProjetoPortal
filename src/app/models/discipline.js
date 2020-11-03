import mongoose from '../../database';

const DisciplineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
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
  notas: [{
    nomeNota: {
      type: String,
    },
    pesoNota: {
      type: Number,
    },
    alunos: [{
      idAlunos: {
        type: String
      },
      valorNota: {
        type: Number,
      },
    }]
  }]
});

const Discipline = mongoose.model('Discipline', DisciplineSchema);

export default Discipline;
