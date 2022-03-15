import withCounter from './HOC/withcounter';

 const HoverCounter = (props) => {
     const {count, incrementCount} = props;
        return(
            <div>
                <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
            </div>
        );
};

export default withCounter(HoverCounter);