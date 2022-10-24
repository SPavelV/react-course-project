import react from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { User } from '../User';

describe('test user component', () => {
  it('should render component correct', () => {
    // render(<User name='Pablo' />);

    console.log(render(<User name={'Pablo'} />));

    expect(screen.getByText('Pablo')).toBeInTheDocument();
  });

  it('should invoke callback', () => {
    const callback = jest.fn();

    console.log(render(<User name={'Pablo'} onClick={callback} />));

    const button = screen.getByText('clickMe');

    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
