import User from '../../../../models/User'
import connectDB from '../../../../middlewares/connectDB';

const handler = async (req, res) => {
  const { username } = req.query
  if (req.method === 'GET') {
    const user = await User.findOne({ username })
    res.json(user)
  } else if (req.method === 'PUT') {
    // update user
  } else if (req.method === 'DELETE') {
    await User.deleteOne({ username })
    res.end()
  }
}

export default connectDB(handler)