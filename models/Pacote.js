import mongoose from 'mongoose'

const pacoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  price: { type: Number, required: true },
  currency: {
    type: String,
    enum: ['real', 'dollar', 'euro'],
    required: true
  },
  days: Number,
  image: String,
  bgImage: String,
  description: String,
  destination: String,
  author: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
  tags: [ { type: mongoose.SchemaTypes.ObjectId, ref: 'Tag' } ]
}, { timestamps: true })

export default mongoose.models.Pacote || mongoose.model('Pacote', pacoteSchema)