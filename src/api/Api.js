import axios from 'axios'

export default class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000'
    })
  }

  async hello() {
    return this.api.get('/hello')
  }

  async getDailyVisits(month) {
    const response = await this.api.get(`/visits/${month}/`)
    // console.log(response)
    return response.data.payload
  }

  async getTotalVisits(month) {
    const response = await this.api.get(`/visits/${month}/total/`)
    console.log(response)
    return response.data.payload
  }

  async getTotalNewVisits(month) {
    const response = await this.api.get(`/visits/${month}/total/new/`)
    // console.log(response)
    return response.data.payload
  }

  async getAvgEngagementTimeSecs(month) {
    const response = await this.api.get(`/visits/${month}/engagement/average/`)
    // console.log(response)
    return response.data.payload
  }

  async getTotalReceipt(month) {
    const response = await this.api.get(`/sells/${month}/total/`)
    // console.log(response)
    return response.data.payload
  }

  async getMostVisitedProducts(activityType) {
    const response = await this.api.get(`/products/${activityType}/`)
    console.log(response)
    return response.data.payload
  }
}