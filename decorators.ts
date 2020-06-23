
//* CLASS DECORATOR
function setAPIVersion(apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

@setAPIVersion('1.0.0')
class API { }

//* PROPERTY DECORATOR
function minLength(length: number) {
    return (target: any, key: string | symbol) => {
        let val = target[key]

        const getter = () => val

        const setter = (value: string) => {
            if (value.length < length) {
                console.log(`Error: cannot set the movie title to less than ${length} characters`)
            } else {
                val = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class Movie {
    @minLength(10)
    title: string

    constructor(t: string) {
        this.title = t
    }
}

const movie = new Movie('The Hulk')

//* METHOD DECORATOR
function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any) {
            console.log(`waiting ${ms}...`)
            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms);

            return descriptor
        }
    }
}

class Person {
    greeting: string


    constructor(g: string) {
        this.greeting = g
    }

    @delay(2000)
    greet() {
        console.log(`Hello ${this.greeting}`)
    }
}

const person = new Person('sup dude?')
person.greet()
