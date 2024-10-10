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

  test('case-1 the sum when user enters "1,2,3" and clicks add', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /add/i });
    fireEvent.change(input, { target: { value: '1,2,3' } });
    fireEvent.click(button);
    expect(screen.getByText(/6/i)).toBeInTheDocument();
});

test('case-2 displays error message when user enters negative number', () => {
  render(<App />);
  
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /add/i });

  fireEvent.change(input, { target: { value: '1,-2,3' } });
  fireEvent.click(button);

  expect(screen.getByText(/Invalid input: -2/i)).toBeInTheDocument();
});

test('case-3 displays error message when user enters all negative numbers', () => {
  render(<App />);
  
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /add/i });

  fireEvent.change(input, { target: { value: '-1,-2,-3' } });
  fireEvent.click(button);

  expect(screen.getByText(/Invalid input: -1, -2, -3/i)).toBeInTheDocument();
});

test('case-4 displays error message when user enters characters', () => {
  render(<App />);
  
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /add/i });

  fireEvent.change(input, { target: { value: '1,2,a' } });
  fireEvent.click(button);

  expect(screen.getByText(/Invalid input: a/i)).toBeInTheDocument();
});

test('case-5 displays error message when user enters all chracters', () => {
  render(<App />);
  
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /add/i });

  fireEvent.change(input, { target: { value: 'a,b,c' } });
  fireEvent.click(button);

  expect(screen.getByText(/Invalid input: a, b, c/i)).toBeInTheDocument();
});


});

