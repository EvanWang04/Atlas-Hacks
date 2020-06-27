// import React from 'react';
// import { useTheme } from '@material-ui/core/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';


// // Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData('January', 0),
//   createData('February', 300),
//   createData('March', 600),
//   createData('April', 600),
//   createData('May', 1500),
//   createData('June', 1800),
//   createData('July', 2200),
//   createData('August', 2400),
// ];

// export default function Chart() {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis dataKey="time" stroke={theme.palette.text.secondary}>
//           <Label
//               angle={0}
//               position="bottom"
//               style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
//             >
//               Months (M)
//             </Label>
//             </XAxis>
//           <YAxis stroke={theme.palette.text.secondary}>
//             <Label
//               angle={270}
//               position="left"
//               style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
//             >
//               Sales ($)
//             </Label>
//           </YAxis>
//           <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }
import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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
      <LineChart
        width={500}
        height={300}
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
    );
  }
}

