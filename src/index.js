import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { veryDifficultCalculation } from './utils/memo-function';

veryDifficultCalculation({ a: 12, b: 5 });
veryDifficultCalculation({ a: 12, b: 5 });
veryDifficultCalculation({ a: 12, b: 5 });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// root.render(
//   React.createElement('div', {
//     id: 'div1',
//     children: [
//       React.createElement('h1', {
//         children: 'Caramba!',
//       }),
//       React.createElement('div', {
//         id: 'div2',
//         children: [
//           React.createElement('span', { children: 'Hello World' }),
//           React.createElement('button', {
//             onClick: () => console.log('click'),
//             children: 'Button',
//           }),
//         ],
//       }),
//     ],
//   })
// );
