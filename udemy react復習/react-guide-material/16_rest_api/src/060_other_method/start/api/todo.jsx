import axios from 'axios'

const END_URL = 'http://127.0.0.1:3003/todo'

const todoAPI = {
  async getAll(){
    const result = await axios.get(END_URL)
    return result.data;
  },
  async post(todo){
    const result = await axios.post(END_URL,todo)
    return result.data
  },
  async delete(todo){
    const result = await axios.delete(END_URL + '/' + todo.id)
    return result.data
  },
  async patch(todo){
    const result = await axios.patch(END_URL + '/'+todo.id,todo)
    return result.data
  }
}

export default todoAPI