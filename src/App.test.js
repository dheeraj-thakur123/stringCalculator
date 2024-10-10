import { render, screen,fireEvent} from '@testing-library/react';
import App from './App';




describe('App Component', () => {
  test('base case displays 0 when the input is empty and the add button is clicked', () => {
      render(<App />);

      // Get the input and button elements
      const input = screen.getByRole('textbox'); 
      const button = screen.getByRole('button', { name: /add/i });

      // click event
      fireEvent.click(button);

      // result display 0
      expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

  test('calculates the sum when user enters "1,2,3" and clicks add', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /add/i });
    fireEvent.change(input, { target: { value: '1,2,3' } });
    fireEvent.click(button);
    expect(screen.getByText(/6/i)).toBeInTheDocument();
});


});

