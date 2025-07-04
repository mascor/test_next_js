import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get } from 'firebase/database'

const firebaseConfig = {
  databaseURL: 'https://esp32-casa-4af4e-default-rtdb.europe-west1.firebasedatabase.app/'
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export { database, ref, get }