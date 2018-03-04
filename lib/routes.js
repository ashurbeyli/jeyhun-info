import Home from './components/Home/';
import Blogs from './components/Blogs/';
import { getHomeData } from './actions/homeActions';
import { getBlogsData } from './actions/blogsActions';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
    loadData: () => getHomeData()
  }, {
    path: '/blogs',
    component: Blogs,
    loadData: () => getBlogsData()
  }
];

export default routes;