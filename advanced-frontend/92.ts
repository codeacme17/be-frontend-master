/**
 *  已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
 *  const value = '112'
 *  const fn = (value) => {
 *    ...
 *  }
 *  fn(value) // 输出 [1， 11， 112]
 *
 */

const data = [
  {
    id: "1",
    name: "test1",
    children: [
      {
        id: "11",
        name: "test11",
        children: [
          {
            id: "111",
            name: "test111",
          },
          {
            id: "112",
            name: "test112",
          },
        ],
      },
      {
        id: "12",
        name: "test12",
        children: [
          {
            id: "121",
            name: "test121",
          },
          {
            id: "122",
            name: "test122",
          },
        ],
      },
    ],
  },
]

function fn(value: string) {
  const res: string[] = []

  function dfs(data: any): number | undefined {
    for (let item of data) {
      if (item.id === value) return res.unshift(item.id)

      if (item.children && item.children.length > 0) {
        let is = dfs(item.children)
        if (is !== 0) return res.unshift(item.id)
      }
    }
  }

  dfs(data)
  return res
}

console.log(fn("112"))
