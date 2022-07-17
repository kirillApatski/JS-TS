export const userObj = {
    "0": "Dimych",
    "1": "Natasha",
    "2": "Valera",
    "3": "Katya"
}

type UsersType = {
    [key: string]: { id: number, name: string }
}
export const users: UsersType = {
    "101": {id: 101, name: "Dimych"},
    "321": {id: 321, name: "Natasha"},
    "423": {id: 423, name: "Valera"},
    "3124": {id: 3124, name: "Katya"},
}

//users[1]
var user = {id: 100500, name: "Igor"}
users[user.id] = user
delete users[user.id]
users[user.id].name = "Vitya"

export const usersArray = [
    {id: 101, name: "Dimych"},
    {id: 321, name: "Natasha"},
    {id: 423, name: "Valera"},
    {id: 3124, name: "Katya"},
];