const sendMessage = (type: string, data: string) => {
  window.parent.postMessage({
    origin: 'hotmart',
    type,
    data,
  }, "*");
} 

export const goto = (addr: string) => {
  console.log('----->>>> addr', addr)
  sendMessage('goto', addr);
}
