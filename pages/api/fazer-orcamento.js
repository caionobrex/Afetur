import nodemailer from 'nodemailer';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, topic, state, city, neighborhood, details } = req.body
  }
}