import fs from 'fs'
import multer from 'multer'
import connectDB from '../../../middlewares/connectDB'
import Media from '../../../models/Media'
import { getSession } from 'next-auth/client'

export const config = {
  api: {
    bodyParser: false
  }
}

const upload = multer().single('file')

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const medias = await Media.find()
    res.json(medias)
  } else if (req.method === 'POST') {
    const session = await getSession({ req })
    if (!session) return res.status(401).json({ msg: 'Auth required.' })

    upload(req, res, (err) => {
      const date = new Date()
      const path = `public/uploads/${date.getFullYear()}/${date.getMonth() + 1}`
      fs.writeFile(path, req.file.buffer, (err) => {
        if (err) console.log(err)
        const media = new Media({
          title: req.body.title,
          slug: req.body.slug,
          originalName: '',
          description: req.body.description,
          path: path,
          url: '',
          type: ''
        })
        res.json(media)
      })
    })
  }
}

export default connectDB(handler)