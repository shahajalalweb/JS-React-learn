import withCounter from './HOC/withcounter';

 const ClickCounter = (props) => {
     const {count, incrementCount} = props;
        return(
            <div>
                <button type="button" onClick={incrementCount}>Clicked {count} times</button>
            </div>
        );
};

export default withCounter(ClickCounter);