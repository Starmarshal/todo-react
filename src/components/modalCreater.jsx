import {Modal, Button, Input, Form} from 'antd';

const ModalCreater = ({onClose, onAdd}) => {
  const [form] = Form.useForm(); // Создаём форму

  const handleSubmit = (values) => {
    onAdd(values.task);
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Добавить задачу"
      open={true}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" onClick={() => form.submit()}>
          Добавить
        </Button>
      ]}
    >
      <Form form={form} onFinish={handleSubmit} style={{margin: '3rem 0'}}>
        <Form.Item
          name="task"
          rules={[{required: true, message: 'Пожалуйста, введите задачу!'}]}
        >
          <Input size="large" placeholder="Введите задачу..."/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalCreater;
