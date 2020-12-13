import nc from 'next-connect'
import fetch from 'node-fetch';

const apiUrl = "http://localhost:3001"

const handler = nc()
  .patch(async (req, res) => {
    try {
      const task = JSON.parse(req.body)
      const response = await fetch(`${apiUrl}/api/task/${req.query.id}`, {method: 'patch', body: JSON.stringify(task), headers: { 'Content-Type': 'application/json' }})
      const json = await response.json()
      res.json(json)
    }
    catch (e){
      console.error(e)
      res.status(500).end()
    }
  })
  .delete(async(req, res) => {
    try{
      await fetch(`${apiUrl}/api/task/${req.query.id}`, {method: 'DELETE'});
      res.status(200).end()
    }
    catch (e){
      console.error(e)
      res.status(500).end()
    }
  })
  

export default handler
