import React, { Component } from 'react'
import { Radio, Input, Space, RadioChangeEvent } from 'antd';

class Q2 extends Component {
    state = {
        value: 0,
    };
    onChange = (e: RadioChangeEvent) => {
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        return (
            <div>
                <Radio.Group onChange={(e)=>this.onChange(e)} value={this.state.value}>
                {/* <Radio.Group  value={this.state.value}> */}
                    <Space direction="vertical">
                        <Radio value={1} defaultChecked={false} style={{fontSize:"20px"}}>正方</Radio>
                        <Radio value={2} defaultChecked={false} style={{fontSize:"20px"}}>反方</Radio>
                    </Space>
                </Radio.Group>
            </div>
        )
    }
}
export default Q2