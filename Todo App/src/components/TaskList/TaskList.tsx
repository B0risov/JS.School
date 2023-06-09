import {FC, memo} from "react";
import {Item} from "../../types/Item";
import "./TaskList.css"
import TaskItem from "../TaskItem/TaskItem";

interface TaskListProps {
    title: string,
    items: Item[],
}

const TaskList: FC<TaskListProps> = memo(({title, items}) => {

    const list_items: JSX.Element[] = items
        .map((item: Item) => <TaskItem item={item} key={item.id}/>);

    return (
        <div className={"task-list"}>
            <h2 className={"task-list__title"}>{title}</h2>
            <div className={'task-list__items'}>
                {list_items}
            </div>
        </div>
    )
})

export default TaskList