import {Button, Card, Typography} from 'antd';
import {useEffect, useState} from 'react';
import Todo from './components/todo.jsx';
import ModalCreater from './components/modalCreater.jsx';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleAddTodo = (newTodo) => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
    }
    setShowModal(false);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Card style={{width: '80%', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', maxWidth: '800px'}}>
          <Typography.Title style={{textAlign: 'center'}} level={2}>
            Список дел
          </Typography.Title>
          {todos.map((todo, index) => (
            <Todo key={index} text={todo} onDelete={() => handleDeleteTodo(index)}/>
          ))}
          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
            <Button
              style={{borderRadius: '10px', fontSize: 15, width: 120}}
              onClick={() => setTodos([])}
              type="primary"
              danger
            >
              Очистить
            </Button>
            <Button onClick={handleShow} style={{borderRadius: '10px', fontSize: 15, width: 120}} type="primary">
              + Добавить
            </Button>
          </div>
        </Card>
        {showModal &&
          <ModalCreater onClose={() => setShowModal(false)} onAdd={handleAddTodo}/>
        }
      </div>
    </>
  );
}

export default App;
