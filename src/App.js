import './App.css'
import ReportField from './components/ReportField'
import ReportDailyGraphic from './components/ReportDailyGraphic'
import Api from "./api/Api";
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props)

    this.reportFields = [
      {
        name: 'Usuários',
        value: '13 mil'
      },
      {
        name: 'Novos Usuários',
        value: '8,4 mil'
      },
      {
        name: 'Tempo médio de engajamento',
        value: '34 min 18 s'
      },
      {
        name: 'Receita total',
        value: 'R$ 0,00'
      }
    ]

    this.data = [
      {
        date: '01 set',
        value: 4000
      },
      {
        date: '02 set',
        value: 3000
      },
      {
        date: '03 set',
        value: 2000
      },
      {
        date: '04 set',
        value: 2780
      },
      {
        date: '05 set',
        value: 1890
      },
      {
        date: '06 set',
        value: 2390
      },
      {
        date: '07 set',
        value: 3490
      },
    ]

    this.api = new Api()
    this.text = 'xxxxx'
  }

  async testHello() {
    const payload = await this.api.hello()
    this.text = payload.data.status
    console.log(this.text)
    this.forceUpdate(() => {})
  }

  async testDailyVisits() {
    const payload = await this.api.getDailyVisits(9)
    this.text = payload.toString()
    console.log(this.text)
    this.forceUpdate(() => {})
  }

  componentDidMount() {
    this.testDailyVisits()
  }

  render() {
    return (
      <div className="app">
        <div>
          {this.reportFields.map((reportField, index) => (
            <ReportField key={index} name={reportField.name} value={reportField.value} />
          ))}
        </div>
        <div className="report-daily-graphic">
          <ReportDailyGraphic data={this.data} />
        </div>
        <div>
          {this.text}
        </div>
      </div>
    )
  }
}

export default App;
