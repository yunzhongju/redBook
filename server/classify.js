import request from "./network.js"

const getCategory = sex => {
  const req = request({
    url: `https://api-freesy.jinhuyu.cn/api/category?sex=${sex}`,
    header: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0`
    }
  })
  return req
}

const getCondition = (sex, cat_id, serial, sort, page) => {
  const req = request({
    url: `https://api-freesy.jinhuyu.cn/api/condition_query?sex=${sex}&cat_id=${cat_id}&serial_status=${serial}&sort=${sort}&page=${page}`,
    header: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0`
    }
  })
  return req
}


module.exports = {
  getCategory,
  getCondition
}