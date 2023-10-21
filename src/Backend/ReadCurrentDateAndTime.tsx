export const CurrentDate = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();

  console.log(
    'Time: ',
    year + '-' + month + '-' + day + 'T' + hours + ':' + min + ':' + sec + '.000Z',
  );
  return year + '-' + month + '-' + day + 'T' + hours + ':' + min + ':' + sec + '.000Z';
};
