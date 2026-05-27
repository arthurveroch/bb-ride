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

export const sendMessage = async ({
  type,
  prenom,
  nom,
  mail,
  phone,
  details,
}: Mail): Promise<
  | {
      success: boolean
      message?: undefined
    }
  | {
      success: boolean
      message: string
    }
> => {
  try {
    await transporter.sendMail({
      from: mail,
      to: process.env.SMTP_USER,
      subject: `Nouvelle demande BB-Ride de ${nom} ${prenom}`,
      text: `Vous avez reçu un nouveau message : \n Prénom : ${prenom} \n Nom : ${nom} \n Numéro de téléphone : ${phone} \n Type de client : ${type} \n Message : ${details}  `,
    })

    return { success: true }
  } catch (error) {
    console.error(error)

    return { success: false, message: "Erreur lors de l'envoi " }
  }
}
