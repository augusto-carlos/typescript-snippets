//* =========== TYPES =========

//* BOOLEAN
let enable: boolean = true

//* STRING
let text: string = 'Hello World'

//* NUMBER (int, float, hex, binary)
let people: number

//* ARRAY
let items1: number[] = [1, 2]
let items2: Array<number> = [1, 2]

//* TUPLE (such as array, but with previous elements)
let dados: [number, string] = [1, "2"]

//* ENUM 
enum Colors {
  white = '#fff',
  black = '#000'
}

//* ANY (allow the variable to recive any type)
let data: any = 'Carlos' || 1 || true

//* VOID 
function sayHello(): void {
  console.log('hello')
}

//* NULL / UNDEFINED
let none: null | undefined
none = null || undefined

//* NEVER
function error(): never {
  throw new Error("error")
}

//* OBJECT
let user: object
user = {
  name: 'Carlos',
  age: 20,
  developer: true
}




