import { render, screen,fireEvent} from '@testing-library/react';
import App from './App';




describe('App Component', () => {
  test('base case displays 0 when the input is empty and the add button is clicked', () => {
      render(<App />);

      // Get the input and button elements
      const input = screen.getByRole('textbox'); // This selects the input box
      const button = screen.getByRole('button', { name: /add/i }); // This selects the button

      // Simulate clicking the button without entering any input
      fireEvent.click(button);

      // Assert that the result displays 0
      expect(screen.getByText(/0/i)).toBeInTheDocument();
  });
});
