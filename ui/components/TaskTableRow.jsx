import moment from 'moment'
import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'

const TaskRowCheckBoxField = ({canEdit, isChecked, onChange}) => <Form.Check 
    type="checkbox" 
    checked={isChecked} 
    readOnly={!canEdit} 
    onChange={onChange}/>

const TaskRowNumberField = ({canEdit, value, onChange}) => <Form.Control 
    size="sm" 
    type="number" 
    value={value} 
    readOnly={!canEdit} 
    onChange={onChange}/>

const TaskRowTextField = ({value, onChange}) => <Form.Control 
    size="sm" 
    type="text" 
    value={value} 
    onChange={onChange}/>

const RowField = ({column, value, onChange}) => {
    switch (column.type) {
        case "checkbox": {
            return <TaskRowCheckBoxField canEdit={column.canEdit} isChecked={value} onChange={onChange}/>
        }
        case "number": {
            return <TaskRowNumberField canEdit={column.canEdit} value={value}  onChange={onChange}/>
        }
        case "datetime": {
            return <span>{moment(Number(value)).format(column.format)}</span>            
        }
        default: {
            return column.canEdit 
                ? <TaskRowTextField value={value}  onChange={onChange}/>
                : <span>{value}</span>
        }
    }
}

const TaskRowEditField = ({rowId, canSave, onDelete, onSave, canDelete}) => <div>
    <Button variant="light" disabled={!canSave} onClick={onSave}>Save</Button>
    <Button variant="light" onClick={onDelete.bind(null, rowId)} disabled={!canDelete}>Delete</Button>
</div>

const TaskTableRow = ({columns, row, rowIndex, deleteRow, onSave}) => {

    const [form, setForm] = useState(row);

    const onRowFieldChange = (propertyName, e) => {
        const value = e.currentTarget.type === "checkbox" ? e.currentTarget.checked : e.currentTarget.value;
        form[propertyName] = value;
        form._isDirty = true
        setForm({...form});
    }

    return (<tr>
        <td>{1+rowIndex}</td>
        {columns.map((c, idx) => <td key={idx}>
            <RowField key={idx} column={c} value={form[c.name]} onChange={onRowFieldChange.bind(null, c.name)}/>
        </td>)}
        <td><TaskRowEditField rowId={row.id} onDelete={deleteRow} canDelete={true} canSave={form._isDirty} onSave={onSave.bind(null, form)}/></td>
    </tr>)
}

export default TaskTableRow