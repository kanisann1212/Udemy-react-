import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe('Messageコンポーネントの確認テスト', () => {
  describe('初期表示の確認。', () => {
    test('初期表示の確認。', () => {
      render(<Message />)
      const h2El = screen.getByRole('heading', { name: '入力された文字:' })
      expect(h2El).toBeInTheDocument()
    });
  })

  describe('画面操作の正常性確認', () => {
    test('入力値の変更＝＞送信ボタンの押下', async() => {
      const user = userEvent.setup()
      render(<Message />)
      const InputEl = screen.getByRole('textbox')
      const btnEl = screen.getByRole('button',{name:'送信ボタン'})
      const h2El = screen.getByRole('heading', { name: '入力された文字:' })

      expect(h2El).toBeInTheDocument()
      expect(btnEl).toBeDisabled()
      expect(InputEl.value).toBe("")

      await user.type(InputEl,"こんにちは")
      expect(btnEl).not.toBeDisabled()

      await user.click(btnEl)
      expect(h2El.textContent).toBe("入力された文字:こんにちは")
    });
  })


})



