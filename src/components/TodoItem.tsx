import React from "react";
import {Todo} from "../types";

interface TodoItemProps extends Todo {
    styles?: React.CSSProperties,
    handlerRemove: (id: Todo["id"]) => void,
    handlerCheckBox: (id: Todo["id"]) => void,
}

const TodoItem = ({id, title, completed, styles, handlerRemove, handlerCheckBox}: TodoItemProps) => {

    return (
        <li style={{color: "slategray", padding: "5px", ...styles}}>
            <input type="checkbox" checked={completed} onChange={() => handlerCheckBox(id)}/>
            <span>{title}</span>
            <span className='close' onClick={() => handlerRemove(id)}>&times;</span>
        </li>
    );
};

export default TodoItem;

// Использование React.FC добавляет типизацию для функционального компонента, что позволяет
// TypeScript понять, что это React-компонент.
// React.FC также автоматически добавляет типизацию для children и возвращаемого значения.

// Эта запись добавляет избыточную информацию, если не нужно использовать children или
// специфические функции React.FC.

//const TodoItem: React.FC<TodoItemProps> = ({id, title, completed}) => {
//     return (
//         <li>
//             <input type="checkbox" checked={completed}/>
//             <span>{id}</span>
//             <span>{title}</span>
//             <span>&times;</span>
//         </li>
//     );
// };

// Если нужно использовать children или необходимо явно указывать, что это функциональный компонент
// React, то использование React.FC может быть полезным.

// Если компонент не будет использовать children и нужен более чистый код,
// второй подход (не используя React.FC) может быть предпочтительнее.
