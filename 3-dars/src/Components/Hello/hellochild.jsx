
import viteLogo from '../Hello/vite.svg'

const Hellochild = ({name, profession, age}) => {
    // console.log(props);

    return (
        <div>
            <img src="{viteLogo}" alt="" />
            <h2>Hello word</h2>
            <p>His job is {profession}, he is {age} years old</p>
        </div>
    )
}

export default Hellochild