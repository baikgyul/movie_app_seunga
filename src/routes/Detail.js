import React from 'react';
import { render } from '@testing-library/react';

class Detail extends React.Component{
    componentDidMount(){
        const{location,history} = this.props;
    }


    render(){
        return <span>hello</span>;
    }
}

export default Detail;