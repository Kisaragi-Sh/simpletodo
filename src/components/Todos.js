import React from 'react'
import TodoList from './TodoList'

class Todos extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            todoText: null,

        }
    }

    renderTodos(i, key, fn) {
        return <TodoList text={i} key={key} function={fn} />
    }

    addTodos(tes) {
        this.setState({
            todos: [...this.state.todos, this.renderTodos(tes)]
        })
    }

    render() {
        return (
            <div>
                <input type="text" />
                <button onClick={() => this.addTodos(' i am godliek')}>P r e s s</button>
                <ul>
                    {this.state.todos}
                </ul>
            </div>
        )
    }
}

export default Todos;