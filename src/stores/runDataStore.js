import { defineStore } from 'pinia'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import db from '../plugins/firebase.config.js'

export const useRunDataStore = defineStore('runDataStore', {
  state: () => ({
    runs: []
  }),
  actions: {
    async fetchItems () {
      try {
        const runsCollection = collection(db, 'runs')
        const snapshot = await getDocs(runsCollection)
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        this.runs = items
      } catch (error) {
        console.error('Erreur lors de la récupération des items:', error);
      }
    },
    async addItem (item) {
      try {
        const runsCollection = collection(db, 'runs')
        await addDoc(runsCollection, item)
        this.runs.push(item)
        await this.fetchItems()
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'item:', error)
      }
    }
  }
})
