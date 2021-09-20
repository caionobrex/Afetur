import Post from '../../../models/Post'
import { getSession } from 'next-auth/client'
import connectDB from '../../../middlewares/connectDB'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const posts = await Post.find()
    res.json(posts)
  } else if (req.method === 'POST') {
    const session = await getSession({ req })
    const post = new Post({
      title: req.body.title,
      slug: req.body.slug,
      body: req.body.body,
      image: String,
      author: {},
      category: req.body.category,
      tags: req.body.tags
    })
    res.json(post)
  }
}

export default connectDB(handler)