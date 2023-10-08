
const Inputs = (props) => {
    
    return(
        <div>
            <label>{props.label}</label>
            <input
                placeholder={props.placeholder}
                type={props.type}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
        
    );
}

export default Inputs;