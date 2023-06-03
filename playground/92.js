const data = [
  {
    id: '1',
    name: 'test1',
    children: [
      {
        id: '11',
        name: 'test11',
        children: [
          {
            id: '111',
            name: 'test111',
          },
          {
            id: '112',
            name: 'test112',
            children: [
              {
                id: '1121',
                name: 'test111',
              },
              {
                id: '1122',
                name: 'test111',
              },
            ],
          },
        ],
      },
      {
        id: '12',
        name: 'test12',
        children: [
          {
            id: '121',
            name: 'test121',
          },
          {
            id: '122',
            name: 'test122',
          },
        ],
      },
    ],
  },
]

// dfs

// backtrack
function fn(data, value) {
  const res = []

  function dfs(data) {
    for (let item of data) {
      if (item.id === value) {
        res.unshift(item.id)
        return true
      }

      if (item.children && item.children.length > 0) {
        const is = dfs(item.children)
        if (is) {
          res.unshift(item.id)
          return true
        }
      }
    }
  }

  dfs(data)
  return res
}

console.log(fn(data, '112'))
