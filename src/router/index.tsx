import { createBrowserRouter, RouteObject } from 'react-router-dom';
import NotFoundPage from '@/components/404';
import LayoutPage from '@/layout';
import Login from '@/pages/Login';
// import { Navigate } from 'react-router-dom'
import GoodsDetail from '@/pages/GoodsDetail';
import GoodsList from '@/components/GoodsList';
import GoodsPlatter from '@/components/GoodsPlatter';
import GoodsEdit from '@/pages/GoodsEdit';

//路由配置
const routes: RouteObject[] = [
    {
        path: '/',
        element: <LayoutPage />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/admin',
        element: <LayoutPage />,
        children: [
            {
                index: true,
                path: 'list',
                element: <GoodsList />
            },
            {
                path: 'platter',
                element: <GoodsPlatter />
            }
        ]
    },
    {
        path: '/detail/:id',
        element: <GoodsDetail />
    },
    {
        path: '/edit/:id',
        element: <GoodsEdit />
    },
    {
        path: '/edit',
        element: <GoodsEdit />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
];

const router = createBrowserRouter(routes);

export default router;
