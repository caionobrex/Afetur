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
    console.log(req.query)
    const medias = await Media.find()
    res.json(medias)
  } else if (req.method === 'POST') {
    // create and upload a new media
    const session = await getSession({ req })
    if (!session) return
  }
}

export default connectDB(handler)