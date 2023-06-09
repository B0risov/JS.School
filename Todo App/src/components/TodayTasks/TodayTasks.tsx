import {FC} from "react";
import {Item} from "../../types/Item";
import "./TodayTasks.scss"
import {useTypedDispatch, useTypedSelector} from "../../hooks/reduxHooks";
import {setTodayShown} from "../../redux/slices/itemSlice";
import Button from "../BaseComponents/Button";

const TodayTasks: FC = () => {

    const {items} = useTypedSelector(state => state.items)
    const theme = useTypedSelector(state => state.theme)

    const dispatch = useTypedDispatch()

    const today: Date = new Date()

    const today_list: JSX.Element[] = items
        .filter((item: Item): boolean => {
            const parsed_date: Date = new Date(Date.parse(item.date_complete))

            return parsed_date.getFullYear() === today.getFullYear()
                && parsed_date.getMonth() === today.getMonth()
                && parsed_date.getDate() === today.getDate()
                && !item.isChecked;
        })
        .map((item: Item) => <li className={"today-tasks__task"} key={item.id}>{item.title}</li>)

    const handleOk = () => {
        dispatch(setTodayShown(true))
    }

    return (
        <div className={`today-tasks today-tasks--${theme}`}>
            <h2 className={"today-tasks__title"}>Good Morning</h2>
            <p>{today_list.length === 0 ? 'You have no tasks for today!' : 'You have the next planned tasks for today:'}</p>
            <div className={"today-tasks__list"}>
                <ul>
                    {today_list}
                </ul>
            </div>
            <Button text={"Ok"} className={"today-tasks__ok-button"} onClick={handleOk}/>
        </div>
    )
}

export default TodayTasks