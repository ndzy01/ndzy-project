import { Button, Input, Form, Select, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { observer } from 'mobx-react-lite';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { MyEditor as Editor } from '../../components/Editor';
import { disabledDate } from '../../utils';
import { useStores } from '../../store';
import { useMount } from 'ahooks';

export const ViewTodo = observer(() => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const {
    todo: {
      state: { tags, todoInfo },
      queryTagList,
    },
  } = useStores();

  useMount(() => {
    queryTagList();
  });

  return (
    <PageContainer
      footer={[
        <Button
          type="primary"
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
          name="view"
          scrollToFirstError
        >
          <Form.Item name="name" label="名称">
            <Input.TextArea rows={1} />
          </Form.Item>
          <Form.Item name="deadline" label="终止时间">
            <DatePicker className="w-100" format="YYYY-MM-DD" disabledDate={disabledDate} />
          </Form.Item>
          <Form.Item name="detail" label="详情">
            <Editor />
          </Form.Item>
          <Form.Item name="tagId" label="标签">
            <Select options={tags.map((item) => ({ label: `${item.name}-(${item.userName})`, value: item.id }))} />
          </Form.Item>
        </Form>
      </ProCard>
    </PageContainer>
  );
});
