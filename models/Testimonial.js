import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  statment: { type: String, required: true },
}, { timestamps: true })

export default mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema)