import './App.css'
import ReportField from './components/ReportField'
import ReportDailyGraphic from './components/ReportDailyGraphic'

function App() {
  const reportFields = [
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

  const data = [
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

  return (
    <div className="app">
      <div>
        {reportFields.map((reportField, index) => (
          <ReportField key={index} name={reportField.name} value={reportField.value} />
        ))}
      </div>
      <div className="report-daily-graphic">
        <ReportDailyGraphic data={data} />
      </div>
    </div>
  );
}

export default App;
