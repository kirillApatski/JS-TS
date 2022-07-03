import {age, CoursesType} from "./04";
import exp from "constants";

test("should take old men older then 90", () => {

    const oldAges = age.filter(age => age > 90)

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100)
});
test("should take courses chipper 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150},
    ];

    const chipCourses = courses.filter(courses => courses.price < 160)

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("CSS");
    expect(chipCourses[1].title).toBe("REACT")


})

test("get only uncompleted task", () => {
    const tasks = [
        {id:1, title: "bread", isDone: false},
        {id:2, title: "milk", isDone: true},
        {id:3, title: "solt", isDone: false},
        {id:4, title: "sugar", isDone: true},
    ]
    const uncomletedTasks = tasks.filter(task => !task.isDone)

    expect(uncomletedTasks.length).toBe(2)
    expect(uncomletedTasks[0].id).toBe(1)
    expect(uncomletedTasks[1].id).toBe(3)

})