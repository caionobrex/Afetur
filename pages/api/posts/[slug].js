import connectDB from '../../../middlewares/connectDB'
import Post from '../../../models/Post'

async function handler(req, res) {
  const { slug } = req.query
  if (req.method === 'GET') {
    const post = await Post.findOne({ slug })
    res.json(post)
  } else if (req.method === 'PUT') {
    // edit post if user is admin
  } else if (req.method === 'DELETE') {
    // delete the post if user is admin
  }
}

export default connectDB(handler)