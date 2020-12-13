import TaskTableRow from './TaskTableRow'

const TaskTableBody = ({columns, rows, deleteRow, onSave}) => <tbody>
    {rows.map((row, idx) => <TaskTableRow key={row.id} columns={columns} row={row} rowIndex={idx} deleteRow={deleteRow} onSave={onSave}/>)}
</tbody>

export default TaskTableBody

