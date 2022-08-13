
export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse eveniet eius sint accusantium est cum! Architecto maxime expedita rem, nisi dolores tempore consequuntur? Illo voluptates sint harum dicta nihil.',
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Aute pariatur magna reprehenderit velit sit laborum ipsum qui nulla adipisicing voluptate in qui.',
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: 'Qui proident amet sit commodo nulla reprehenderit aliqua exercitation dolor excepteur qui.',
      picture: null,
    },
  ]
})