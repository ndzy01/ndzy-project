import { PageContainer, ProCard, ProList } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { serviceAxios, decrypt } from '../../utils';
import { useStores } from '../../store';
import { useEffect, useRef } from 'react';

export const TodoList: React.FC<Record<string, unknown>> = observer(() => {
  const actionRef: any = useRef();
  const navigate = useNavigate();
  const {
    todo: {
      state: { tags },
      updateState,
      queryTagList,
      delTodo,
      finishTodo,
      recoverTodo,
    },
  } = useStores();

  useEffect(() => {
    queryTagList();
  }, []);

  const toolBarRender: any = () => {
    return (
      <Button
        type="primary"
        onClick={() => {
          updateState({ todoInfo: {} });
          navigate('/todo/edit');
        }}
      >
        新增
      </Button>
    );
  };

  const metas: any = {
    title: {
      dataIndex: 'name',
      title: 'name',
      search: false,
    },
    content: {
      render: (_dom: any, entity: any) => {
        return (
          <Space size={0}>
            <Tag>{entity.userName}</Tag>
            <Tag>{entity.tagName}</Tag>
            <Tag color="red">{entity.deadline}</Tag>
            <Tag color={entity.isFinish === '0' ? 'skyblue' : 'green'}>
              {entity.isFinish === '0' ? '处理中' : '已完成'}
            </Tag>
          </Space>
        );
      },
      search: false,
    },
    actions: {
      render: (_text: any, row: any) => [
        <a
          href={row.url}
          target="_blank"
          rel="noopener noreferrer"
          key="view"
          onClick={() => {
            updateState({ todoInfo: row });
            navigate('/todo/view');
          }}
        >
          查看
        </a>,
        Number(row.isFinish) === 0 && (
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="edit"
            onClick={() => {
              updateState({ todoInfo: row });
              navigate('/todo/edit');
            }}
          >
            编辑
          </a>
        ),
        Number(row.isFinish) === 0 && (
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="finish"
            onClick={() => {
              finishTodo(row).then(() => {
                actionRef.current?.reload();
              });
            }}
          >
            完成
          </a>
        ),
        Number(row.isFinish) === 1 && (
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="recover"
            onClick={() => {
              recoverTodo(row).then(() => {
                actionRef.current?.reload();
              });
            }}
          >
            恢复
          </a>
        ),
        Number(row.isFinish) === 1 && (
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            key="findelish"
            onClick={() => {
              delTodo(row).then(() => {
                actionRef.current?.reload();
              });
            }}
          >
            删除
          </a>
        ),
      ],
      search: false,
    },
    tagId: {
      title: '标签',
      valueType: 'select',
      valueEnum: tags.reduce((accumulator, { id, name }) => {
        accumulator[id] = name;
        return accumulator;
      }, {}),
    },
    isFinish: {
      title: '状态',
      valueType: 'select',
      valueEnum: { 0: '处理中', 1: '已完成' },
    },
    operationSource: {
      title: '来源',
      valueType: 'select',
      valueEnum: { h5: 'pc' },
    },
  };

  return (
    <PageContainer>
      <ProCard
        style={{
          minHeight: 800,
        }}
      >
        <ProList<any>
          actionRef={actionRef}
          toolBarRender={toolBarRender}
          search={{}}
          rowKey="id"
          request={async (params = {} as Record<string, any>) => {
            const data = await serviceAxios.get('/todos', { params: { ...params } });
            data.data = data.data.map((item: any) => ({
              ...item,
              detail: decrypt(item.detail, item.keyBase, item.ivBase),
            }));
            return data;
          }}
          showActions="hover"
          metas={metas}
        />
      </ProCard>
    </PageContainer>
  );
});
