import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Learn React");
  expect(linkElement).toBeInTheDocument();
});
 test("render kiran",()=>{
  render(<App/>);
  const h1Element = screen.getByText("iam Kiran")
  expect(h1Element).toBeInTheDocument()
 })