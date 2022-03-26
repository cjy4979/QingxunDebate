import React, { Component } from 'react'
import { message } from 'antd'
import styles from './Q3.less'

export default class Q3 extends Component {
    state = {
        z1: 0,
        z2: 0,
        z3: 0,
        f1: 0,
        f2: 0,
        f3: 0,
        count: 0
    }


    render() {
        return (
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",flexDirection:"column",width:"100%"}}>
                <div className={styles.voted} style={this.state.z1+this.state.z2+this.state.z3+this.state.f1+this.state.f2+this.state.f3>3?{color:"red"}:{color:"black"}}
                >已投{this.state.z1+this.state.z2+this.state.z3+this.state.f1+this.state.f2+this.state.f3}票</div>
                <div className={styles.Q3}>

                    <div className={styles.Z}>
                        <div className={styles.debater}>
                            <div>正方一辩:</div>
                            <div className={styles.Rate}>
                                <div className={styles.number} id='0'
                                    onClick={() => {
                                        this.setState({ z1: 0, }); console.log(this.state.count);
                                    }}
                                    style={this.state.z1 === 0 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>0</div>

                                <div className={styles.number} id='1'
                                    onClick={() => { this.setState({ z1: 1, count: this.state.count + this.state.z1 }) }}
                                    style={this.state.z1 === 1 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>1</div>

                                <div className={styles.number} id='2'
                                    onClick={() => { this.setState({ z1: 2, count: this.state.count + this.state.z1 }) }}
                                    style={this.state.z1 === 2 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>2</div>

                                <div className={styles.number} id='3'
                                    onClick={() => { this.setState({ z1: 3, count: this.state.count + this.state.z1 }) }}
                                    style={this.state.z1 === 3 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>3</div>
                            </div>
                        </div>
                        <div className={styles.debater}>
                            <div>正方二辩:</div>
                            <div className={styles.Rate}>
                                <div className={styles.number} id='0'
                                    onClick={() => { this.setState({ z2: 0, count: this.state.count + this.state.z2 }) }}
                                    style={this.state.z2 === 0 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>0</div>

                                <div className={styles.number} id='1'
                                    onClick={() => { this.setState({ z2: 1, count: this.state.count + this.state.z2 }) }}
                                    style={this.state.z2 === 1 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>1</div>

                                <div className={styles.number} id='2'
                                    onClick={() => { this.setState({ z2: 2, count: this.state.count + this.state.z2 }) }}
                                    style={this.state.z2 === 2 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>2</div>

                                <div className={styles.number} id='3'
                                    onClick={() => { this.setState({ z2: 3, count: this.state.count + this.state.z2 }) }}
                                    style={this.state.z2 === 3 ? { backgroundColor: '#bae7ff', color: "#f6ffed" } : { backgroundColor: '#F7FCF2' }}>3</div>
                            </div>
                        </div>
                        <div className={styles.debater}>
                            <div>正方三辩:</div>
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
                            <div>反方一辩:</div>
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
                            <div>反方二辩:</div>
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
                            <div>反方三辩:</div>
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
        )
    }

}
