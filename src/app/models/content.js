import mongoose from '../../database';

const ContentSchema = new mongoose.Schema({
  disciplineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discipline',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Content = mongoose.model('Content', ContentSchema);

export default Content;
