import {Col, Form} from 'react-bootstrap'

const TaskFilterForm = ({filterText, onFilter}) => <Form>
    <Form.Row className="align-items-center">
        <Col>
            <Form.Label htmlFor="taskTitleInput" srOnly>Filter</Form.Label>
            <Form.Control className="mb-2" id="taskTitleInput" placeholder="Filter" onChange={onFilter} value={filterText}/>
        </Col>
    </Form.Row>
</Form>

const TaskControlPanel = ({filterText, onFilter}) => <div>
    <TaskFilterForm filterText={filterText} onFilter={onFilter}/>
</div>

export default TaskControlPanel