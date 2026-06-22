import Message from "./Message";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Messageコンポーネントのテスト',()=>{
  
    test('存在するかどうか',()=>{
      render(<Message/>)
      const InputEl = screen.getByRole('textbox')
      expect(InputEl).toBeInTheDocument()
    })

    test('値が更新されるかどうか',async()=>{
      const user = userEvent.setup()
      render(<Message/>)
      const InputEl = screen.getByRole('textbox')
      await user.type(InputEl,'こんにちは')

      expect(InputEl.value).toBe('こんにちは')
    })
})