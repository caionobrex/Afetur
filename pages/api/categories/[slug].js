import connectDB from '../../../middlewares/connectDB'
import Category from '../../../models/Category'
import Post from '../../../models/Post'
import { getSession } from 'next-auth/client'

const handler = async (req, res) => {
  const { slug } = req.query
  if (req.method === 'GET') {
    const category = await Category.findOne({ slug })
    res.json(category)
  } else if (req.method === 'PUT') {
    await Category.updateOne({ slug }, {})
    res.end()
  } else if (req.method === 'DELETE') {
    const category = await Category.findOne({ slug })
    await Category.deleteOne({ slug })
    await Post.updateMany({ category: category._id }, { category: null })
    res.end()
  }
}

export default connectDB(handler)