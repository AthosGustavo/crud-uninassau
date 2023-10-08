


const Botao = (props) => {
    return(
        <div>
            <button type={props.type} onClick={props.onClick}>
                {props.rotuloBtn}
            </button>
        </div>
    );
}

export default Botao;