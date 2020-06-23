//* setting type of a paramenter
type Uid = number | string | undefined

function setUid(uid: Uid) {
    return uid
}
setUid("1" || 1)

//* setting union and wrinting the previous values
type Platform = "windows" | "linux" | "mac os"

function setPlatform(platform: Platform) {
    return platform
}
setPlatform("linux")

//* setting type to an object
type AccountInfo = {
    id: number,
    name?: string,
    email: string
}

type UserInfo = {
    nickname: string
    age: number
}

//* using pipe and intersection
let user1: AccountInfo | UserInfo = {
    id: 1,
    name: "Carlos",
    email: "hi@carlos.com"
}

let user2: AccountInfo & UserInfo = {
    id: 1,
    name: "Augusto",
    email: "hi@auguto.com",
    nickname: 'gus',
    age: 25
}
