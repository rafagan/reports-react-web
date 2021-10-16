import axios from 'axios'

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000',
    })
  }

  async hello() {
    return this.api.get('/hello')
  }

  async getDailyVisits(month) {
    const response = await this.api.get(`/visits/${month}`)
    console.log('getDailyVisits', response)
    return response.data.payload
  }
}

export default Api;