import {Button, Card, Typography} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import {useState} from 'react';

const Todo = ({text, onDelete}) => {
  const [completed, setCompleted] = useState(false);

  const handleChange = () => {
    setCompleted(prevState => !prevState);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
      <Card
        style={{
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: completed ? '#B4FFB4' : '#C6F9FF',
          marginTop: '0.5rem',
          borderRadius: '1.2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography.Text style={{fontSize: 18}}>
            {text}
          </Typography.Text>
          <div style={{display: 'flex', gap: '8px'}}>
            <Button
              onClick={handleChange}
              type="primary"
              icon={<CheckOutlined/>}
              style={{
                backgroundColor: completed ? 'gray' : 'limegreen',
                borderColor: completed ? 'gray' : 'limegreen',
              }}
            />
            <Button
              type="primary"
              danger
              icon={<CloseOutlined/>}
              onClick={onDelete}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Todo;
