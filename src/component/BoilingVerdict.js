export default function BoilingVerdict ({celsius = 0}) {
    if (celsius >= 100){
        return <h1>The water would boil !</h1>
    }
    return <h1>Water would not boil !</h1>
}