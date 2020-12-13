import nc from 'next-connect'
import fetch from 'node-fetch';

const apiUrl = "http://localhost:3001"

const handler = nc()
  .get(async(req, res) => {
    try {
      const response = await fetch(`${apiUrl}/api/task`, {method: 'GET'})
      const tasks = await response.json()
      res.json(tasks)
    }
    catch (e){
      console.error(e)
      res.status(500).end()
    }
  })
  .post(async(req, res) => {
    try {
      const task = JSON.parse(req.body)
      const response = await fetch(`${apiUrl}/api/task`, {method: 'post', body: JSON.stringify(task), headers: { 'Content-Type': 'application/json' }})
      const json = await response.json()
      res.json(json)
    }
    catch (e){
      console.error(e)
      res.status(500).end()
    }
  })
  
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

export default handler
