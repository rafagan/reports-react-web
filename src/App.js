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

  return (
    <div className="app">
      <div>
        {reportFields.map((reportField, index) => (
          <ReportField key={index} name={reportField.name} value={reportField.value} />
        ))}
      </div>
      <div className="report-daily-graphic">
        <ReportDailyGraphic />
      </div>
    </div>
  );
}

export default App;
