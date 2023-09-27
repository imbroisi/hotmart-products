const NODE_ENV = process.env.NODE_ENV;

const sendMessage = (type: string, data: string) => {
  window.parent.postMessage({
    origin: 'hotmart',
    type,
    data,
  }, "*");
} 

export const goto = (addr: string) => {
  console.log('PRODUCTS ----->>>> addr', addr)
  if(NODE_ENV === 'development' && window.top === window.self) {
    // @ts-ignore
    window.location.href = addr;
  } else {
    sendMessage('goto', `products/${addr}`);
  }
}
