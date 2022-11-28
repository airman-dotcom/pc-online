
class Desktop extends React.Component {
    constructor(props){
        super(props)
    } render(){
        return (
            <>
            <div style={{backgroundImage: `url("./imgs/bg.jpg")`}}>
            </div>
            </>
        )
    }
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Desktop/>)