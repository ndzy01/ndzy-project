import { observer } from 'mobx-react-lite';
import { Button, Input, Space, Tag } from 'antd';
import { PageContainer, ProCard, ProList } from '@ant-design/pro-components';
import { useStores } from '../store';
import { useRef, useState } from 'react';
import { serviceAxios } from '../utils';

export const TagList = observer(() => {
  const [tagName, setTagName] = useState('');
  const actionRef: any = useRef();
  const {
    todo: { delTag, createTag },
  } = useStores();

  const toolBarRender: any = () => {
    return (
      <Input
        value={tagName}
        onChange={(e) => {
          setTagName(e.target.value);
        }}
        addonAfter={
          <Button
            type="primary"
            onClick={() => {
              createTag({ name: tagName }).then(() => {
                setTagName('');
                actionRef.current?.reload();
              });
            }}
          >
            新增
          </Button>
        }
      />
    );
  };

  const metas: any = {
    title: {
      dataIndex: 'name',
      title: 'name',
    },
    content: {
      render: (_dom: any, entity: any) => {
        return (
          <Space size={0}>
            <Tag>{entity.userName}</Tag>
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
          key="findelish"
          onClick={() => {
            delTag(row).then(() => {
              actionRef.current?.reload();
            });
          }}
        >
          删除
        </a>,
      ],
      search: false,
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
          search={false}
          rowKey="id"
          request={async (params = {} as Record<string, any>) => {
            const data = await serviceAxios.get('/tags', { params: { ...params } });
            return data;
          }}
          pagination={{
            pageSize: 10,
          }}
          showActions="hover"
          metas={metas}
        />
      </ProCard>
    </PageContainer>
  );
});
