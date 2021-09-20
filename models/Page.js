import mongoose from 'mongoose'

const pageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  bgImage: String
}, { timestamps: true })

export default mongoose.models.Page || mongoose.model('Page', pageSchema)