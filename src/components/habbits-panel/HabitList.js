import {useId, useState} from "react";
import styles from "./HabitList.module.css";
import AddHabitForm from "./add-habit-form/AddHabitForm";
import HabitItem from "./habit-item/HabitItem";
import {v4 as uuid} from "uuid";

const HabitList = () => {
    const [habits, setHabits] = useState([])
    const addHabit = (title, type) => {
        if (title && type) {
            const newTask = {
                id: uuid.v4(),
                title: title,
                counter: 0,
                type: type
            }
            setHabits([...habits, newTask])
        }
    }

    const onDeleteHabit = (deletedId) => {
        let newHabit = habits.filter(habit => habit.id !== deletedId)
        setHabits(newHabit)
    }

    const onHabitChanged = (changedHabit) => {
        if (changedHabit) {
            const index = habits.findIndex((obj => obj.id === changedHabit.id))
            let newTasks = [...habits]
            newTasks[index] = changedHabit
            setHabits(newTasks)
        }
    }

    return (
        <div className={styles.wrapper}>
            <h5 className={styles.header}>Habits: </h5>
            <AddHabitForm addTask={addHabit}/>
            {habits.map((task) => {
                return (
                    <HabitItem task={task} onDeleteTask={onDeleteHabit} onEditTask={onHabitChanged}/>
                )
            })
            }
        </div>
    )
}
export default HabitList