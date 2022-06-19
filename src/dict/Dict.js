import "./Dict.css"

export default function Dict() {
    fetch("/md/dict/index.json")
    .then(response => response.json())
    .then(indices => {
        indices.map(index => {
            fetch("/md/dict/"+index.path)
                .then(response => response.text())
                .then(text => console.log(text))
        })
    })
    return <> 
        <nav>
            <p id="nav-title">Dictionary</p>
            <p id="nav-description">기초를 위한 컴퓨터 이론 공부</p>
        </nav>

    </>
}

function Content() {
    
}