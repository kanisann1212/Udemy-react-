import { counterReducer }  from "./counterReducer"

const initState = { count:0, step:1}
describe('counterReducerのテスト + ', () => {
  test('up', ()=>{
    const newState = counterReducer(initState,{type:'up'})
    expect(newState).toEqual({count:1,step:1})
  })
  test('down', ()=>{
    const newState = counterReducer(initState,{type:'down'})
    expect(newState).toEqual({count:-1,step:1})
  })

});
