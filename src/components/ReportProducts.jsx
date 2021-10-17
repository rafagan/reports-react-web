import './ReportProducts.css'

function ReportProducts(props) {
  return (
    <div>
      <h1>Produtos mais acessados por tipo de atividade</h1>
      <select
        className="activityType"
        onChange={(event) => props.onChangeActivityType(event)}
      >
        <option key={-1} disabled selected>Selecione uma opção</option>
        {props.activityTypes.map(at => (
          <option key={at} value={at}>{at}</option>
        ))}
      </select>
      <table className="products">
        <tbody>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Quantidade</th>
        </tr>
        {props.products.map(p => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.amount}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReportProducts