import mongoose from 'mongoose'

const mediaSchema = new mongoose.Schema({
  title: String,
  slug: String,
  originalName: String,
  description: String,
  path: String,
  url: String,
  type: String
}, { timestamps: true })

export default mongoose.models.Media || mongoose.model('Media', mediaSchema)