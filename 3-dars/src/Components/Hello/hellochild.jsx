import viteLogo from '../Hello/vite.svg'

const Hellochild = ({name, profession, age}) => {
    return (
        <div className="hello-child">
            <img src={viteLogo} alt="Vite logo" />
            
            <h2>Salom, {name}!</h2>
            <p>Kasbi: {profession}</p>
            <p>Yoshi: {age}</p>
        </div>
    )
}

export default Hellochild