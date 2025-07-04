import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getDatabase } from 'firebase-admin/database'
import path from 'path'
import { readFileSync } from 'fs'

if (!getApps().length) {
  console.log('FIREBASE_SERVICE_ACCOUNT exists:', process.env.FIREBASE_SERVICE_ACCOUNT)
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)

  initializeApp({
    credential: cert(serviceAccount),
    databaseURL: 'https://esp32-casa-4af4e-default-rtdb.europe-west1.firebasedatabase.app'
  })
}

export default async function handler(req, res) {
  const db = getDatabase()
  const snapshot = await db.ref('dati').once('value')
  res.status(200).json(snapshot.val())
}