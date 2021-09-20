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

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const medias = await Media.find()
    res.json(medias)
  } else if (req.method === 'POST') {
    // create and upload a new media
    const session = await getSession({ req })
    if (!session) return res.status(401).json({ msg: 'Auth required.' })

    fs.writeFile('public/uploads/text.txt', 'testing', (err) => {
      if (err) console.log(err)
    })
  }
}

export default connectDB(handler)