import Pacote from '../../../models/Pacote'
import connectDB from '../../../middlewares/connectDB'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const pacotes = await Pacote.find()
    res.json(pacotes)
  } else if (req.method === 'POST') {
    // check if user is admin
    const pacote = new Pacote({
      title: req.body.title,
      slug: req.body.slug,
      body: req.body.body,
      image: String,
      author: {},
      category: req.body.category,
      tags: []
    })
    res.json(post)
  }
}

export default connectDB(handler)