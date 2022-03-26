import React, { Component } from 'react'
import styles from './Ques.less';
import { Input, Button, Radio, Space, RadioChangeEvent, message, Alert } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { history } from 'umi'


export default class Ques extends Component {
    state = {
        name: '',
        z1: 0,
        z2: 0,
        z3: 0,
        f1: 0,
        f2: 0,
        f3: 0,
        win: ''
    }
    Submit = () => {
        message.destroy();
        
        var peopleName = /^([\u4e00-\u9fa5]{0,20}|[a-zA-Z\.\s]{1,20})$/;
        var total = this.state.z1 + this.state.z2 + this.state.z3 + this.state.f1 + this.state.f2 + this.state.f3;
        var name = this.state.name.replaceAll(" ", "");//防止提交纯空格
        var debater = total === 0 ? '弃票' : this.state.z1+"@"+ this.state.z2+"@"+ this.state.z3+"@"+ this.state.f1+"@"+ this.state.f2+"@"+ this.state.f3

        if (peopleName.test(name) === false) {
            message.error("请检查您的姓名格式")
        } else if (name.length === 0) {
            message.error("请输入姓名")
        } else if (this.state.win === '') {
            message.error("请选择获胜方")
        } else if (total !== 3 && total !== 0) {
            message.error("佳辩总票数已超过或未满3票，请核查您的票型")
        } else {
            fetch('/api/enroll/submit?name='+this.state.name+
            '&win='+this.state.win+
            '&debater='+debater
            
            , {
                    credentials: 'same-origin',
                }
                ).then(response => response.json())
                .then(data =>{
                    if(data.code === 0){
                        message.success("提交成功")
                        history.push('/vj/success')
                    }else{
                        message.error('出错了，请重试')
                    }
                });
        
            
        }
    }


    onKeyDownchange = (e: React.KeyboardEvent<any>)=> {
      if(e.keyCode  === 13){
            this.Submit
      }
    }
    //获胜方
    onChange = (e: RadioChangeEvent) => {
        this.setState({
            win: e.target.value,
        })
    };

    onChangeName = (e: { target: { value: any; }; }) => {
        this.setState({
            name: e.target.value,
        })
    }

    render() {
        return (
            <div className={styles.question} >
                {/* 问卷部分 */}
                <div className={styles.q1}>
                    <p className={styles.qustionText}>1.您的姓名：</p>
                    <div className={styles.name}><Input prefix={<UserOutlined />} onChange={(e) => this.onChangeName(e)} /></div>
                </div>

                {/* 获胜方 */}
                <div className={styles.q2} style={{ marginTop: "5px" }}>
                    <p className={styles.qustionText}>2.请您综合双方场上表现投出本场获胜方：</p>
                    <div className={styles.winner}>
                        <div>
                            <Radio.Group onChange={(e) => this.onChange(e)} value={this.state.win} >
                                {/* <Radio.Group  value={this.state.value}> */}
                                <Space direction="vertical">
                                    <Radio value={'正'} defaultChecked={false} style={{ fontSize: "16px" }}>正方</Radio>
                                    <Radio value={'反'} defaultChecked={false} style={{ fontSize: "16px" }}>反方</Radio>
                                </Space>
                            </Radio.Group>
                        </div>
                    </div>
                </div>


                {/* 佳辩 */}
                <div className={styles.q3} style={{ marginTop: "10px" }}>
                    <p className={styles.qustionText}>3.您有三票最佳辩手归属票，请综合选手表现投出您的佳辩票型。可以均投给一位辩手或分别投给其他辩手，也可以选择弃票：</p>
                    <Alert
                            message="已投票数超出3票，请再次核查票型" type="error"
                            style={this.state.z1 + this.state.z2 + this.state.z3 + this.state.f1 + this.state.f2 + this.state.f3 > 3 ? { display: "block" } : { display: "none" }}
                        />
                    <div className={styles.vote} >
                       
                        <div className={styles.Q3}>

                            <div className={styles.Z}>
                                <div className={styles.debater}>
                                    <div className={styles.dName}>正方一辩:</div>
                                    <div className={styles.Rate}>
                                        <div className={styles.number} id='0'
                                            onClick={() => { this.setState({ z1: 0, }) }}
                                            style={this.state.z1 === 0 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>0</div>

                                        <div className={styles.number} id='1'
                                            onClick={() => { this.setState({ z1: 1 }) }}
                                            style={this.state.z1 === 1 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>1</div>

                                        <div className={styles.number} id='2'
                                            onClick={() => { this.setState({ z1: 2 }) }}
                                            style={this.state.z1 === 2 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>2</div>

                                        <div className={styles.number} id='3'
                                            onClick={() => { this.setState({ z1: 3 }) }}
                                            style={this.state.z1 === 3 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>3</div>
                                    </div>
                                </div>
                                <div className={styles.debater}>
                                    <div className={styles.dName}>正方二辩:</div>
                                    <div className={styles.Rate}>
                                        <div className={styles.number} id='0'
                                            onClick={() => { this.setState({ z2: 0 }) }}
                                            style={this.state.z2 === 0 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>0</div>

                                        <div className={styles.number} id='1'
                                            onClick={() => { this.setState({ z2: 1 }) }}
                                            style={this.state.z2 === 1 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>1</div>

                                        <div className={styles.number} id='2'
                                            onClick={() => { this.setState({ z2: 2 }) }}
                                            style={this.state.z2 === 2 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>2</div>

                                        <div className={styles.number} id='3'
                                            onClick={() => { this.setState({ z2: 3 }) }}
                                            style={this.state.z2 === 3 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>3</div>
                                    </div>
                                </div>
                                <div className={styles.debater}>
                                    <div className={styles.dName}>正方三辩:</div>
                                    <div className={styles.Rate}>
                                        <div className={styles.number} id='0'
                                            onClick={() => { this.setState({ z3: 0 }) }}
                                            style={this.state.z3 === 0 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>0</div>

                                        <div className={styles.number} id='1'
                                            onClick={() => { this.setState({ z3: 1 }) }}
                                            style={this.state.z3 === 1 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>1</div>

                                        <div className={styles.number} id='2'
                                            onClick={() => { this.setState({ z3: 2 }) }}
                                            style={this.state.z3 === 2 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>2</div>

                                        <div className={styles.number} id='3'
                                            onClick={() => { this.setState({ z3: 3 }) }}
                                            style={this.state.z3 === 3 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>3</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.F}>
                                <div className={styles.debater}>
                                    <div className={styles.dName}>反方一辩:</div>
                                    <div className={styles.Rate}>
                                        <div className={styles.number} id='0'
                                            onClick={() => { this.setState({ f1: 0 }); }}
                                            style={this.state.f1 === 0 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>0</div>

                                        <div className={styles.number} id='1'
                                            onClick={() => { this.setState({ f1: 1 }) }}
                                            style={this.state.f1 === 1 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>1</div>

                                        <div className={styles.number} id='2'
                                            onClick={() => { this.setState({ f1: 2 }) }}
                                            style={this.state.f1 === 2 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>2</div>

                                        <div className={styles.number} id='3'
                                            onClick={() => { this.setState({ f1: 3 }); }}
                                            style={this.state.f1 === 3 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>3</div>
                                    </div>
                                </div>
                                <div className={styles.debater}>
                                    <div className={styles.dName}>反方二辩:</div>
                                    <div className={styles.Rate}>
                                        <div className={styles.number} id='0'
                                            onClick={() => { this.setState({ f2: 0 }) }}
                                            style={this.state.f2 === 0 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>0</div>

                                        <div className={styles.number} id='1'
                                            onClick={() => { this.setState({ f2: 1 }) }}
                                            style={this.state.f2 === 1 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>1</div>

                                        <div className={styles.number} id='2'
                                            onClick={() => { this.setState({ f2: 2 }) }}
                                            style={this.state.f2 === 2 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>2</div>

                                        <div className={styles.number} id='3'
                                            onClick={() => { this.setState({ f2: 3 }) }}
                                            style={this.state.f2 === 3 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>3</div>
                                    </div>
                                </div>
                                <div className={styles.debater}>
                                    <div className={styles.dName}> 反方三辩:</div>
                                    <div className={styles.Rate}>
                                        <div className={styles.number} id='0'
                                            onClick={() => { this.setState({ f3: 0 }) }}
                                            style={this.state.f3 === 0 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>0</div>

                                        <div className={styles.number} id='1'
                                            onClick={() => { this.setState({ f3: 1 }) }}
                                            style={this.state.f3 === 1 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>1</div>

                                        <div className={styles.number} id='2'
                                            onClick={() => { this.setState({ f3: 2 }) }}
                                            style={this.state.f3 === 2 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>2</div>

                                        <div className={styles.number} id='3'
                                            onClick={() => { this.setState({ f3: 3 }) }}
                                            style={this.state.f3 === 3 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>3</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                <Button type="primary" ghost className={styles.submit} onClick={this.Submit} >提交</Button>
            </div>
        )
    }
}

