'use server'
import nodemailer from 'nodemailer'

type Mail = {
  type: string
  prenom: string
  nom: string
  mail: string
  phone: string
  details: string
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export const sendMail = async ({ type, prenom, nom, mail, phone, details }: Mail) => {}
