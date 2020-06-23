//* writing a interface 
interface Game {
    title: string
    description?: string
    readonly genre: string
    platform: string[]
    getSimilars?: (title: string) => void
}

//* setting type a object using an interface
const theLastOfUs: Game = {
    title: 'The Last of Us',
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    getSimilars: (title) => {
        return console.log(`Similar game to ${title}: Uncharted, A Plague Tale, Metro`)
    }
}

theLastOfUs.getSimilars(theLastOfUs.title)

//* extending interfaces
interface DLC extends Game {
    originalGame: Game
    newContent: string[]
}

const leftbehind: DLC = {
    title: 'The Last of Us - Left behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    platform: ['PS4'],
    originalGame: theLastOfUs,
    newContent: ['3 hours story', 'new characters']
}

//* implementing  class with interface
class CreateGame implements Game {
    title: string
    description: string
    genre: string
    platform: string[]

    constructor(t: string, d: string, g: string) {
        this.title = t
        this.description = d
        this.genre = g
    }

    set setPlatform(p: string[]) {
        this.platform = p
    }
} 
