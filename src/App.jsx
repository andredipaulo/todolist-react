import { useState } from 'react'
import { Item, Container, TodoList, Input, Button, List } from './styles'

function App() {
    let input = document.querySelector('input')
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState("")

    function inputChange(event) {
        setInputValue(event.target.value)
    }

    function buttonClick() {
        if (input.value != '') {
            setTasks([...tasks, inputValue])
            console.log(inputValue)
            input.value = ""
        }

    }

    return (
        <Container>
            <TodoList>
                <Input placeholder='Digite a sua tarefa.' onChange={inputChange} />
                <Button onClick={buttonClick}>Adicionar Tarefa</Button>

                <List>
                    {
                        tasks.map((item, index) => (
                            <Item key={index}>{item}</Item>
                        ))
                    }
                </List>
            </TodoList>
        </Container>
    )

}
export default App
