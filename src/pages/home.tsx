import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from '../store';

export const Home: React.FC<Record<string, unknown>> = observer(() => {
  const {
    loading,
    b: {
      state: { count },
      total,
      iCount,
      fb1Async,
    },
  } = useStores();

  return (
    <PageContainer
      extra={[
        <Button key="3">操作</Button>,
        <Button key="2">操作</Button>,
        <Button key="1" type="primary">
          主操作
        </Button>,
      ]}
      subTitle="简单的描述"
      footer={[
        <Button key="3">重置</Button>,
        <Button key="2" type="primary">
          提交
        </Button>,
      ]}
    >
      <ProCard
        style={{
          height: '200vh',
          minHeight: 800,
        }}
      >
        <div style={{ color: loading.b ? 'red' : '' }}>
          {total}
          <div> 计数: {count}</div>
          <button onClick={iCount}>同步</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={fb1Async}>异步</button>
        </div>
      </ProCard>
    </PageContainer>
  );
});
