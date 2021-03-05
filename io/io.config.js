const io = {
  sockets: [ // Required
    { // At least one entry is required
      name: 'home',
      url: 'http://localhost:3000',
      default: true,
      vuex: { /* see section below */ },
      namespaces: { /* see section below */ }
    },
    { name: 'work', url: 'http://somedomain1:3000' },
    { name: 'car', url: 'http://somedomain2:3000' },
    { name: 'tv', url: 'http://somedomain3:3000' },
    { name: 'test', url: 'http://localhost:4000' }
  ]
}

export default io
