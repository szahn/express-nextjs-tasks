import {useState} from 'react'
import {Col, Form, Button} from 'react-bootstrap'

const CreateTaskForm  = ({createTask}) => {

    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState(0)

    const onTitleChanged = (e) => {
        setTitle(e.currentTarget.value);
        return false;
    }

    const onPriorityChanged = (e) => {
        setPriority(e.currentTarget.value);
        return false;
    }

    const onCreateTask = (e) => {
        e.preventDefault()
        if (!title.trim()) return false;
        createTask({title: title.trim(), priority})
        setTitle("")
        setPriority(0)
        return false;
    }

    return (<Form>
        <Form.Row className="align-items-center">
            <Col>
                <Form.Label htmlFor="taskTitleInput" srOnly>New Task</Form.Label>
                <Form.Control className="mb-2" id="taskTitleInput" placeholder="Task Title" value={title} onChange={onTitleChanged}/>
            </Col>
            <Col xs="auto">
                <Form.Label htmlFor="taskTitlePriority" srOnly>Priority</Form.Label>
                <Form.Control className="mb-2" type="number" id="taskTitlePriority" placeholder="Priority" value={priority} onChange={onPriorityChanged}/>
            </Col>
            <Col xs="auto">
                <Button type="submit" className="mb-2" onClick={onCreateTask}>
                    Create Task
                </Button>
            </Col>
        </Form.Row>
    </Form>)
}

export default CreateTaskForm