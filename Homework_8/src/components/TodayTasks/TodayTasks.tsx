import {FC} from "react";
import {Item} from "../../types/Item";
import "./TodayTasks.css"

interface TodayTasksProps {
    setTodayShown: () => void,
    items: Item[]
}

const TodayTasks: FC<TodayTasksProps> = ({setTodayShown, items}) => {

    const today: Date = new Date()

    let today_list: JSX.Element[] = items
        .filter((item: Item): boolean => {
            const parsed_date: Date = new Date(Date.parse(item.date))

            if (parsed_date.getFullYear() === today.getFullYear()
                && parsed_date.getMonth() === today.getMonth()
                && parsed_date.getDate() === today.getDate()
                && !item.isChecked
            ) {
                return true
            } else {
                return false
            }
        })
        .map((item: Item) => <li className={"today-tasks__task"} key={item.id}>{item.title}</li>)

    return (
        <div className={"today-tasks"}>
            <h2 className={"today-tasks__title"}>Good Morning</h2>
            <p>{today_list.length === 0 ? 'You have no tasks for today!' : 'You have the next planned tasks for today:'}</p>
            <div className={"today-tasks__list"}>
                <ul>
                    {today_list}
                </ul>
            </div>
            <button className={"button today-tasks__ok-button"} onClick={setTodayShown}>Ok</button>
        </div>
    )
}

export default TodayTasks