import { Layout } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SiderMenu from './sider';
import HeaderMenu from './header';
import Account from './account';
import MainPage from '@/components/MainPage';
import { useEffect } from 'react';

const { Header, Content, Sider } = Layout

const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'left',
    backgroundColor: 'var(--main-bg-color)',
    color: 'black',
    height: '64px',
    borderBottom: '0.5px solid silver'
};

const logoStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '200px',
    fontSize: '24px',
    position: 'relative',
    left: '-48px'
};

const siderStyle: React.CSSProperties = {
    backgroundColor: 'var(--main-bg-color)'
};

const contentStyle: React.CSSProperties = {
    height: 'calc(100vh - 64px)',
    padding: '24px',
    overflow: 'hidden'
};

const accountStyle: React.CSSProperties = {
  right: '24px',
  position: 'absolute',
}

const LayoutPage: React.FC = () => {
    const location = useLocation();

    let content: JSX.Element;
    if (location.pathname === '/') {
        content = <MainPage />;
    } else {
        content = (
            <>
                <Sider style={siderStyle}>
                    <SiderMenu />
                </Sider>
                <Content style={contentStyle}>
                    <Outlet />
                </Content>
            </>
        );
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (location.pathname === '/admin') navigate('list');
    });

    return (
        <Layout>
            <Header style={headerStyle}>
                <img
                    alt=''
                    src='/src/assets/images/logo.png'
                    style={logoStyle}
                />
                <HeaderMenu />
                <Account style={accountStyle} />
            </Header>
            <Layout>{content}</Layout>
        </Layout>
    );
};

export default LayoutPage
