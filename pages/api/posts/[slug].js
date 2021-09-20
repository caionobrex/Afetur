import Post from '../../../models/Post'

export default function handler(req, res) {
  if (req.method === 'GET') {
    const post = await Post.findOne({ slug: req.params.slug })
    res.json(post)
  } else if (req.method === 'PUT') {
    // edit post if user is admin
  } else if (req.method === 'DELETE') {
    // delete the post if user is admin
  }
}