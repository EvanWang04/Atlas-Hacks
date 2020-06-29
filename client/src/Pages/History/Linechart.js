import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import "./Chart.css"

const data = [
  {
    name: 'January', Rent: 0, amt: 2400,
  },
  {
    name: 'February', Rent: 300, amt: 2210,
  },
  {
    name: 'March', Rent: 600, amt: 2290,
  },
  {
    name: 'April', Rent: 600, amt: 2000,
  },
  {
    name: 'May', Rent: 1500, amt: 2181,
  },
  {
    name: 'June', Rent: 1800, amt: 2500,
  },
  {
    name: 'July', Rent: 2200, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
    <div className="move">
      <LineChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Rent" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
    );
  }
}
