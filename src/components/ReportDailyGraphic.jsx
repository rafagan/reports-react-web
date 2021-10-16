import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default class ReportDailyGraphic extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={this.props.data}
          margin={{
            top: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="data" />
          <YAxis yAxisId="right" orientation="right" tickFormatter={(label) => label ? `${label} mil` : label} />
          <Line dataKey="segundos" yAxisId="right" type="monotone" stroke="#82ca9d" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
