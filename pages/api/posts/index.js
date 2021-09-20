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

    upload(req, res, function (err) {
      if (err) return
      // req.file
      const date = new Date()
      const path = `public/uploads/${date.getFullYear()}/${date.getMonth() + 1}`
      fs.writeFile('public/uploads/text.txt', 'testing', (err) => {
        if (err) console.log(err)
      })
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
    })

  }
}

export default connectDB(handler)