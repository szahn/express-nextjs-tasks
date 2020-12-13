import TaskTableHeader from './TaskTableHeader'
import TaskTableBody from './TaskTableBody'
import TaskTableFooter from './TaskTableFooter'
import {Table} from 'react-bootstrap'

const TaskTable = ({columns, rows, onRefresh, deleteRow, onSave}) => <div>
    <Table responsive striped>
        <TaskTableHeader columns={columns}/>
        <TaskTableBody columns={columns} rows={rows} deleteRow={deleteRow} onSave={onSave}/>
    </Table>
    <TaskTableFooter taskCount={rows.length} refresh={onRefresh}/>
</div>

export default TaskTable