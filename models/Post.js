import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  body: { type: String, required: true },
  summary: String,
  image: String,
  views: { type: Number, default: 0 },
  visibility: { type: String, enum: ['public', 'private'], default: 'public' },
  author: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
  tags: [ { type: mongoose.SchemaTypes.ObjectId, ref: 'Tag' } ]
}, { timestamps: true })

export default mongoose.models.Post || mongoose.model('Post', postSchema)