import axios from 'axios';

export default {
    findAll: async () => {
      let res = await axios.get("/api/todo")
      return res.data || []
    },

    findOne: async (id) => {
      let res = await axios.get(`/api/todo/${id}`) 
      return res.data || null
    },

    createOne: async (item) => {
      let res = await axios.post("/api/todo/", item)
      return res.data || null
    },

    updateOne: async (item) => {
        let res = await axios.put("/api/todo", item)
        return res.data || null
    },

    deleteOne: async (id) => {
        let res = await axios.delete(`/api/todo/${id}`)
        return res.data || null
    },

}