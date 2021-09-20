import connectDB from '../../../middlewares/connectDB'
import User from '../../../models/User'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body
    const user = await User.findOne({
      $or: [ { username }, { email: username } ]
    })
    .select('+hash')
    .select('+salt')
    if (!user || !user.checkPass(password)) {
      res.status(401)
      return res.json({ msg: 'Credentials wrong.' })
    }
    res.status(200).json(user)
  }
}

export default connectDB(handler)