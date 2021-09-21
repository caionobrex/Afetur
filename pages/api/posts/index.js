import Post from '../../../models/Post'
import multer from 'multer'
import { getSession } from 'next-auth/client'
import connectDB from '../../../middlewares/connectDB'

const upload = multer().single('image')

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const posts = await Post.find()
    res.json(posts)
  } else if (req.method === 'POST') {
    const session = await getSession({ req })
    if (!session) return

    const post = await new Post({
      title: req.body.title,
      slug: req.body.slug,
      body: req.body.body,
      author: {},
      category: req.body.category,
      tags: req.body.tags
    })
    res.json(post)
  }
}

export default connectDB(handler)