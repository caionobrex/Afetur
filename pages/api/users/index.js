import { getSession } from 'next-auth/client'
import connectDB from '../../../middlewares/connectDB'
import User from '../../../models/User'

async function handler(req, res) {
  if (req.method === 'GET') {
    const user = await User.find()
    res.json(user)
  } else if (req.method === 'POST') {
    const session = await getSession({ req })
    if (!session) return res.status(401).json({ msg: 'Auth required.' })
    const user = await new User({
      username: req.body.user,
      email: req.body.email,
      role: req.body.role,
    })
    user.setPass(req.body.pass)
    await user.save()
    res.json(user)
  }
}

export default connectDB(handler)