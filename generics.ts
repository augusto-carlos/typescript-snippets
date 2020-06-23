// S => state
// T => Type
// K => Key
// V => Value
// E => Element

//* using a type alias as a contraint
type numOrStr = string | number

function useState<S extends numOrStr = string>() {
    let state: S

    function getState() {
        return state
    }

    function setState(newState: S) {
        state = newState
    }

    return { getState, setState }
}

const newState = useState()

newState.setState('foo')
console.log(newState.getState())