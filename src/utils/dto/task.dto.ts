import { Task } from '../../components/tasks-board/task.interface'
import { v4 as uuidv4 } from 'uuid'

export const taskDto: Pick<Task, 'id' | 'createdAt' | 'createdBy'> = {
  id: uuidv4(),
  createdAt: '12th Jan',
  createdBy: 'Nastenka',
}
