type UsersType = {
    [key: string]: { id: number, name: string }
}
export let users: UsersType

beforeEach(() => {
    users = {
        "101": {id: 101, name: "Dimych"},
        "321": {id: 321, name: "Natasha"},
        "423": {id: 423, name: "Valera"},
        "1": {id: 1, name: "Katya"},
    }
})

test("should update corresponding user", () => {
    users["1"].name = "Kirill"
    expect(users["1"].name).toBe("Kirill");

})
test("should delete corresponding user", () => {
    delete users["1"]
    expect(users["1"]).toBeUndefined()

})