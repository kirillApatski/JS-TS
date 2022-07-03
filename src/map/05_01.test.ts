import {createGreetingMessage, ManType} from "./05_01";

let people: Array<ManType> = [];

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitryy Sidorov", age: 18}
    ]
});

test("should get array of greeting messages", () => {
    const message = createGreetingMessage(people)

    expect(message.length).toBe(3);
    expect(message[0]).toBe("Hello Andrew. Welcom to IT-Incubator");
    expect(message[1]).toBe("Hello Alexander. Welcom to IT-Incubator");
    expect(message[2]).toBe("Hello Dmitryy. Welcom to IT-Incubator");
})