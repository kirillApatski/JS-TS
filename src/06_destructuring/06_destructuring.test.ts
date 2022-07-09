type MenType = {
    name: string,
    age: number,
    lessons: LessonsType[],
    address:{
        city:{
            title: string
        }
    }
};
type LessonsType = {
    title: string
}
let men: MenType;
beforeEach(()=> {
    men = {
        name: "Kirill",
        age: 28,
        lessons: [{title: "1"}, {title: "2"}],
        address:{
            city:{
                title: "nezavisimosti street"
            }
        }
    };
})

export {}
test("", () => {


    // const age = men.age
    // const lessons = men.lessons

    const {age, lessons} = men;

    const {title} = men.address.city

    expect(title).toBe("nezavisimosti street")

    expect(age).toBe(28)
    expect(lessons.length).toBe(2)
})

test(" ", () => {
    let l1 = men.lessons[0]
    let l2 = men.lessons[1]

    const [,, ...restLessons] = men.lessons
    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
})