import Counter from "./Counter";
import { render, screen, fireEvent } from "@testing-library/react"

test('カウントアップコンポーネント + ', () => {
  // Arrangenge
  render(<Counter originCount = {0}/> )

  // Act
  const btn = screen.getByRole('button',{name:'カウントアップ'})
  fireEvent.click(btn)

  // Assertion
const spanEl = screen.getByText('現在のカウント:1')
expect(spanEl).toBeInTheDocument()
});
