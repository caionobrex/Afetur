import mongoose from 'mongoose'
import crypto from 'crypto'

const userSchema = new mongoose.Schema({
  avatar: String,
  username: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  postCount: { type: Number, default: 0 },
  verified: { type: Boolean, default: false },
  hash: { type: String, select: false },
  salt: { type: String, select: false }
}, { timestamps: true })

userSchema.methods.setPass = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto.pbkdf2Sync(password, this.salt,
    1000, 64, 'sha512').toString('hex')
}

userSchema.methods.checkPass = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt,
    1000, 64, 'sha512').toString('hex')
  return this.hash === hash
}

export default mongoose.models.User || mongoose.model('User', userSchema)