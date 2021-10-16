import './App.css'
import ReportField from "./components/ReportField"
import ReportDailyGraphic from "./components/ReportDailyGraphic"
import Api from './api/Api'
import {Component} from "react"

class App extends Component {
  constructor(props) {
    super(props)

    this.reportFields = {
      totalVisits: {
        name: 'Usuários',
        value: ''
      },
      totalNewVisits: {
        name: 'Novos Usuários',
        value: ''
      },
      avgEngagementTime: {
        name: 'Tempo médio de engajamento',
        value: ''
      },
      totalReceipt: {
        name: 'Receita total',
        value: ''
      },
    }

    this.graphicsData = []
    this.products = []
    this.activityTypes = [
      'trilha', 'cachoeira', 'camping', 'salto',
      'cafe', 'casa', 'rota', 'passeio', 'ingresso'
    ]
    this.activityType = this.activityTypes[0]

    this.api = new Api()
  }

  componentDidMount() {
    this.populateReports()
  }

  async populateReports() {
    const month = 9
    const totalVisits = await this.api.getTotalVisits(month)
    const totalNewVisits = await this.api.getTotalNewVisits(month)
    const avgEngagementTime = await this.api.getAvgEngagementTimeSecs(month)
    const totalReceipt = await this.api.getTotalReceipt(month)

    const minute = Math.floor(avgEngagementTime / 60)
    const seconds = avgEngagementTime % 60

    this.reportFields.totalVisits.value = `${totalVisits / 1000} mil`
    this.reportFields.totalNewVisits.value = `${totalNewVisits / 1000} mil`
    this.reportFields.avgEngagementTime.value = `${minute} min ${seconds} s`
    this.reportFields.totalReceipt.value = `R$ ${(totalReceipt / 100).toFixed(2)}`

    this.graphicsData = await this.api.getDailyVisits(month)

    this.fetchProducts()
  }

  async fetchProducts() {
    this.products = await this.api.getMostVisitedProducts(this.activityType)
    this.forceUpdate(() => {})
  }

  onChangeActivityType(event) {
    const at = event.target.value
    console.log(at)
    this.activityType = at
    this.fetchProducts()
  }

  render() {
    return (
      <div className="app">
        <header>
          {Object.values(this.reportFields).map((reportField, index) => (
            <ReportField key={index} name={reportField.name} value={reportField.value}/>
          ))}
        </header>
        <div className="report-daily-graphic">
          <ReportDailyGraphic data={this.graphicsData} />
        </div>
        <div>
          <h1>Produtos mais acessados por tipo de atividade</h1>
          <select onChange={this.onChangeActivityType}>
            {this.activityTypes.map(at => (
              <option key={at} value={at}>{at}</option>
            ))}
          </select>
          <table>
            <tbody>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Quantidade</th>
            </tr>
            {this.products.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.amount}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App
