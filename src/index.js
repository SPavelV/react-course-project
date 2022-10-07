import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id='div1'>
    <h1>Caramba!</h1>

    <div id='id2'>
      <span>Hello World</span>
      <button type='button' onClick={() => console.log('click')}>
        Button
      </button>
    </div>
  </div>
);

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
