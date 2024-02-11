const root = '';

export const ROUTER_PATHS = {
  main: root + '/',
  profile: root + '/profile',
  story: root + '/story',
  makeOrder: root + '/make',
  orderDetail: root + '/story/{:id}',
  navOrderDetail: (id: string) => root + `/story/${id},`,
};
