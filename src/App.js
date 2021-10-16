import './App.css';
import ReportField from './components/ReportField';

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
    <div>
      {reportFields.map(reportField => (
        <ReportField name={reportField.name} value={reportField.value} />
      ))}
    </div>
  );
}

export default App;
