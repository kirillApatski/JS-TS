export type  ManType = {
    name: string
    age: number
};

const people: Array<ManType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitryy Sidorov", age: 18}
];

const dimychTransformator = (man:ManType) => {
    return {
        stack: ["css", "html", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

const devs = [
    {
        stack: ["css", "html", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css", "html", "tdd", "react"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["css", "html", "tdd", "react"],
        firstName: "Dmitryy", lastName: "Sidorov"
    },
];
let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])
const devs2 = [
    d1, d2, d3
]

const devs3 = people.map(dimychTransformator)
const devs4 = people.map(man => ({
    stack: ["css", "html", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))
const message = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`);

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`)
}
