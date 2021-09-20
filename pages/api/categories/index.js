import connectDB from '../../../middlewares/connectDB'
import Category from '../../../models/Category'
import { getSession } from 'next-auth/client'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const categories = await Category.find()
    res.json(categories)
  } else if (req.method === 'POST') {
    const session = await getSession({ req })
    // if (!session) return
    const category = await new Category({
      name: req.body.name,
      slug: req.body.slug,
      description: req.body.description
    }).save()
    res.json(category)
  }
}

export default connectDB(handler)