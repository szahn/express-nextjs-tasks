import {Badge} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const TaskTableFooter = ({taskCount, refresh}) => <div>
    <Badge>{taskCount} Tasks</Badge><Button variant="link" onClick={refresh}>Refresh</Button>
</div>

export default TaskTableFooter