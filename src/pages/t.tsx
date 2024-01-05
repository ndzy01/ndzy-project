import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { observer } from 'mobx-react-lite';
import { ProTable } from '@ant-design/pro-components';
import { Button, Tag, DatePicker, Switch, Modal } from 'antd';
import { useEffect, useRef } from 'react';
import { useStores } from '../store';
import dayjs from 'dayjs';
import { serviceAxios, decrypt, disabledDate } from '../utils';

const IDatePicker = ({ value, onChange }: any) => {
  return (
    <DatePicker
      value={dayjs(value)}
      onChange={onChange}
      className="w-100"
      format="YYYY-MM-DD"
      disabledDate={disabledDate}
    />
  );
};

const ISwitch = ({ value, onChange }: any) => {
  return (
    <Switch checkedChildren="已完成" unCheckedChildren="进行中" value={!!value} onChange={onChange} className="w-100" />
  );
};

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

export const T = observer(() => {
  const {
    todo: {
      state: { tags },
      queryTagList,
    },
  } = useStores();
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<GithubIssueItem>[] = [
    {
      title: 'name',
      dataIndex: 'name',
      copyable: true,
      ellipsis: true,
      valueType: 'textarea',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      title: 'tagId',
      dataIndex: 'tagId',
      ellipsis: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      valueType: 'select',
      valueEnum: tags.reduce((accumulator, { id, name }) => {
        accumulator[id] = name;
        return accumulator;
      }, {}),
    },
    {
      title: 'deadline',
      dataIndex: 'deadline',
      ellipsis: true,
      renderFormItem: () => {
        return <IDatePicker />;
      },
    },
    {
      title: 'isFinish',
      dataIndex: 'isFinish',
      ellipsis: true,
      renderFormItem: () => {
        return <ISwitch />;
      },
      renderText(text: any) {
        return <Tag color={text ? 'red' : 'green'}>{text ? '已完成' : '进行中'}</Tag>;
      },
    },
    {
      title: 'userName',
      dataIndex: 'userName',
      ellipsis: true,
      editable: false,
    },
    {
      title: 'detail',
      dataIndex: 'detail',
      ellipsis: true,
      search: false,
      editable: false,
      renderText(text: any) {
        return (
          <Button
            onClick={() => {
              Modal.confirm({ content: <div dangerouslySetInnerHTML={{ __html: text }}></div>, icon: null });
            }}
          >
            查看
          </Button>
        );
      },
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (_text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
          查看
        </a>,
      ],
    },
  ];

  useEffect(() => {
    queryTagList();
  }, []);

  return (
    <ProTable<GithubIssueItem>
      pagination={false}
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params) => {
        const data = await serviceAxios.get('/todos', { params: { ...params } });
        data.data = data.data.map((item: any) => ({
          ...item,
          detail: decrypt(item.detail, item.keyBase, item.ivBase),
        }));
        return data;
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'ndzy-todo',
        persistenceType: 'localStorage',
        defaultValue: {
          option: { fixed: 'right', disable: true },
        },
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={
        {
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          // syncToUrl: (values, type) => {
          //   if (type === 'get') {
          //     return {
          //       ...values,
          //       created_at: [values.startTime, values.endTime],
          //     };
          //   }
          //   return values;
          // },
        }
      }
      dateFormatter="string"
      headerTitle="笔记表格"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload();
          }}
          type="primary"
        >
          新建
        </Button>,
      ]}
    />
  );
});
