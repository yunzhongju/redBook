import request from "../server/network.js"

const getBookshelfbook = sex => {
  const req = request({
    url: `https://api-freesy.jinhuyu.cn/api/backShelfbooks?sex=${sex}`,
    header: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.1UgxmwWTkc0K8ceg10ZSlHeUhEUkeGTAM1vftH7lQAo
`,
      Referer: "https://servicewechat.com/wx5aa56d620688753e/10/page-frame.html",
      "content-type": "application/x-www-form-urlencodeds"
    }
  })
  return req
}

const getBookshelf = () => {
  const req = request({
    url: `https://api-freesy.jinhuyu.cn/api/bookshelf`,
    header: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.1UgxmwWTkc0K8ceg10ZSlHeUhEUkeGTAM1vftH7lQAo
`
    }
  })
  return req
}

module.exports = {
  getBookshelfbook,
  getBookshelf
}