import {useState } from 'react'
import {Container, Alert, Row, Col, Spinner} from 'react-bootstrap'

import TaskTable from './TaskTable'
import CreateTaskForm from './CreateTaskForm'
import TaskControlPanel from './TaskControlPanel'
import {orderBy, filter} from 'lodash'
import useSWR, {mutate} from 'swr'
import taskGridOptions from '../data/datagrid.json'

const taskApiUrl = "/api/task"

const refresh = async () => {
  await mutate(taskApiUrl, null, true)
}

const createTask = async (task)=> {
  try{
      const response = await fetch(taskApiUrl, {method: "POST", body: JSON.stringify(task)})
      await refresh()
    }
  catch (e){
      console.error(e)
  }
}
  

const deleteRow = async (rowId) => {
    await fetch(`${taskApiUrl}/${rowId}`, {method: "DELETE"})
    await refresh()
}

const updateRow = async (taskId, task) => {
  await fetch(`${taskApiUrl}/${taskId}`, {method: "PATCH", body: JSON.stringify(task)})
  await refresh()
}


const onSave = async (task, e) =>{
  e.preventDefault()
  await updateRow(task.id, task)
  await refresh()
  return false;
}

export default function TaskContainer() {
    
    const [filterText, setFilterText] = useState("")
  
    const onFilter = (e) => {
      setFilterText(e.currentTarget.value.trim())
      return false
    }
  
    const filterExpr = filterText ? new RegExp(filterText, 'i') : null

    const taskFetcher = (...args) => fetch(...args).then(async (res) => {
      const json = await res.json()
      return orderBy(filter(json, (r) => filterExpr ? r.title.search(filterExpr) >= 0 : true), taskGridOptions.sortColumn)
    }) 
    
    const { data : rows, error, mutate : mutator, isValidating} = useSWR(taskApiUrl, taskFetcher)
  
    const isLoading = isValidating || !error && !rows;

    return (<Container fluid>
        <Row>
          <Col>
            <h1>My Tasks</h1>
            {error ? <Alert variant="danger">{"Unable to fetch data"}</Alert> : null}
          </Col>
          <Col xs="auto">
            {isLoading ? <Spinner animation="border" role="status"><span className="sr-only">Loading Rows...</span></Spinner> : null}
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateTaskForm createTask={createTask}/>
            <TaskControlPanel filterText={filterText} onFilter={onFilter}/>
            <TaskTable 
              onRefresh={refresh}
              columns={taskGridOptions.columns} 
              rows={rows ? rows : []} 
              deleteRow={deleteRow} 
              onSave={onSave} />
          </Col>
        </Row>
      </Container>)
}