import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  statment: { type: String, required: true }
})

export default mongoose.model('Testimonial', testimonialSchema)