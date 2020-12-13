const TaskTableHeader = ({columns}) => <thead>
    <tr>
        <th>&nbsp;</th>
        {columns.map((col, idx) => <th key={idx}>
            {col.title}
        </th>)}
        <th>&nbsp;</th>
    </tr>
</thead>

export default TaskTableHeader
