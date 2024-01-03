import { Button, Input, Form, Select, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { observer } from 'mobx-react-lite';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { MyEditor as Editor } from '../../components/Editor';
import { disabledDate } from '../../utils';
import { useStores } from '../../store';
import { useMount } from 'ahooks';

export const EditTodo = observer(() => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const {
    loading,
    todo: {
      state: { tags, todoInfo },
      createTodo,
      editTodo,
      queryTagList,
    },
  } = useStores();

  const onFinish = () => {
    form.validateFields().then((values) => {
      if (todoInfo?.id) {
        editTodo({ ...values, id: todoInfo.id });
      } else {
        createTodo(values);
      }
      navigate('/todo/list');
    });
  };

  useMount(() => {
    queryTagList();
  });

  return (
    <PageContainer
      title={todoInfo?.id ? '编辑笔记' : '创建笔记'}
      footer={[
        <Button loading={loading.loading} onClick={onFinish} type="primary">
          {todoInfo?.id ? '保存' : '创建'}
        </Button>,
        <Button
          onClick={() => {
            navigate('/todo/list');
          }}
        >
          返回
        </Button>,
      ]}
    >
      <ProCard
        style={{
          minHeight: 800,
        }}
      >
        <Form
          form={form}
          initialValues={{
            name: todoInfo?.name,
            deadline: todoInfo?.deadline ? dayjs(todoInfo.deadline) : dayjs(),
            detail: todoInfo.detail,
            tagId: todoInfo.tagId,
          }}
          preserve={false}
          name="edit"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="名称"
            rules={[
              {
                required: true,
                message: '名称不能为空',
              },
            ]}
          >
            <Input.TextArea rows={1} />
          </Form.Item>
          <Form.Item
            name="deadline"
            label="终止时间"
            rules={[
              {
                required: true,
                message: '终止时间不能为空',
              },
            ]}
          >
            <DatePicker className="w-100" format="YYYY-MM-DD" disabledDate={disabledDate} />
          </Form.Item>
          <Form.Item
            name="detail"
            label="详情"
            rules={[
              {
                required: true,
                message: '详情不能为空',
              },
            ]}
          >
            <Editor />
          </Form.Item>
          <Form.Item
            name="tagId"
            label="标签"
            rules={[
              {
                required: true,
                message: '请选择一个标签',
              },
            ]}
          >
            <Select options={tags.map((item) => ({ label: `${item.name}-(${item.userName})`, value: item.id }))} />
          </Form.Item>
        </Form>
      </ProCard>
    </PageContainer>
  );
});
