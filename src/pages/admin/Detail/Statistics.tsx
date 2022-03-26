import React, { useEffect, useState } from 'react'
import { Layout, Table, Tag, Space, DatePicker } from 'antd';
import { ColumnProps } from 'antd/es/table';
import styles from './Statistics.less'
import onlineLogo from '../../../images/online.png'

const { Header, Content, Footer } = Layout;
const { RangePicker } = DatePicker;

export default function Statistics() {

    const [dataSourse, setDataSourse] = useState([])
    const [currentPage, setCurrentPge] = useState(0)
    const [total, setTotal] = useState(0)

    const date = [
        '03-26',
        '03-27',
        '04-08',
        '04-09',
        '04-15',
        '04-16',
        '04-22',
        '04-23',
        '04-30',
    ]

    const schedule = [
        '测试轮模辩',
        '测试轮正赛',
        '第一轮模辩',
        '第一轮正赛',
        '第二轮模辩',
        '第二轮正赛',
        '第三轮模辩',
        '第三轮正赛',
        '决赛',
        '不在赛程',
    ]

    const scheduleColor = [
        'magenta',
        'purple',
        '#237804',
        '#006d75',
        '#adc6ff',
        '#597ef7',
        'magenta',
        'purple',
        'gold',
        '#d9d9d9'
    ]

    //定义赛程，自动匹配日期

    const bestdebater = [
        '无佳辩',
        '正方一辩',
        '正方二辩',
        '正方三辩',
        '反方一辩',
        '反方二辩',
        '反方三辩',
    ]
    const colorArr = [
        '',
        'green',
        'geekblue',
        'red',
        'magenta',
    ]

    const loadData = (page: number) => {
        setCurrentPge(page - 1)
    }


    useEffect(() => {
        fetch('/api/enroll/findAllBydate?page=' + currentPage + '&size=10', {
            credentials: 'same-origin',
        }
        ).then(response => response.json())
            .then(data => {
                setDataSourse(data.data)
                setTotal(Number(data.msg.substr(9)))
            })
    });

    const columns: ColumnProps<IUserInfo>[] = [{
        title: '序号',
        key: 'type',
        dataIndex: 'type',
        ellipsis: true,
        width: 100,
        align: 'center',
    }, {
        title: '评委',
        key: 'name',
        dataIndex: 'name',
        ellipsis: false,
        align: 'center',
    }, {
        title: '提交时间',
        key: 'time',
        dataIndex: 'time',
        ellipsis: false,
        align: 'center',
        render: (time: any) => {
            let text = time;
            return (
                <span style={{ fontSize: '15px' }}>
                    {text}
                </span>
            );
        },
    }, {
        title: '赛程',
        key: 'time',
        dataIndex: 'time',
        ellipsis: true,
        align: 'center',
        render: (time: any) => {
            let selectDate = time.substr(5, 5)
            for (var i = 0, len = date.length; i < len; i++) {
                if (date[i] === selectDate) {
                    let text = schedule[i]
                    let color = scheduleColor[i]
                    return (
                        <Tag key={time} style={{ fontSize: '15px' }} color={color}>
                            {text.toUpperCase()}
                        </Tag>
                    );
                }
            }
            let text = schedule[schedule.length - 1]
            return (
                <Tag key={time} color='volcano' style={{ fontSize: '15px' }}>
                    {text.toUpperCase()}
                </Tag>
            );

        }
    }, {
        title: '获胜方',
        key: 'win',
        dataIndex: 'win',
        render: winner => {
            let color = winner === '正' ? colorArr[1] : colorArr[2];

            let text = winner === '正' ? '正方' : '反方';
            return (
                <Tag color={color} key={winner}>
                    {text.toUpperCase()}
                </Tag>
            );
        },
        align: 'center',
    }, {
        title: '佳辩票型',
        key: 'debater',
        dataIndex: 'debater',
        ellipsis: false,
        align: 'center',
        render: debater => {
            if (debater === '弃票') {
                let text = '弃票';
                return (
                    <span style={{ color: '#ff4d4f', fontWeight: "bold" }}>{text.toUpperCase()} </span>
                );
            } else {
                let arr = debater.split('@').map(Number)
                arr.unshift(0);
                var text = ''
                //找佳辩票型
                for (var i = 0, len = arr.length; i < len; i++) {
                    if (arr[i] !== 0) {
                        text = text + "\n" + bestdebater[i] + ":" + arr[i]
                    }
                }
                return (
                    <span>{text.toUpperCase()} </span>
                );

            }
        }

    }, {
        title: '佳辩',
        key: 'debater',
        dataIndex: 'debater',
        ellipsis: false,
        align: 'center',
        render: debater => {
            if (debater === '弃票') {
                let text = '弃票';
                return (
                    <Tag key={debater} color={colorArr[3]}>
                        {text.toUpperCase()}
                    </Tag>
                );
            } else {
                let arr = debater.split('@').map(Number)
                arr.unshift(0);
                var count = 0;
                for (var i = 0, len = arr.length; i < len; i++) {
                    if (arr[i] === 1) {
                        count = count + 1;
                    }
                }
                let best = arr.indexOf(Math.max.apply(Math, arr))
                let text = count === 3 ? bestdebater[0] : bestdebater[best];
                let color = count === 3 ? colorArr[4] : best > 3 ? colorArr[2] : colorArr[1];
                return (
                    <Tag key={debater} color={color}>
                        {text.toUpperCase()}
                    </Tag>
                );
            }

        }


    }]

    interface IUserInfo {
        key: string;
        name: string;
        age: number;
        debater: string
    }



    return (

        <div className={styles.background}>
            <Layout >
                <header className={styles.header}>
                        <img className={styles.logo} src={onlineLogo} alt="online" />
                        <div className={styles.title}>青训赛赛果统计</div>
                </header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 32 }}>
                    <Table columns={columns}
                        style={{ marginTop: "15px", cursor: "pointer", minWidth: "480px" }} rowKey="id"
                        pagination={{
                            total,
                            defaultPageSize: 10,
                            hideOnSinglePage: true,
                            showSizeChanger: false,
                            onChange: loadData
                        }}
                        bordered
                        dataSource={dataSourse}
                    />
                </Content>
                <Footer style={{ textAlign: 'center' }}>青训赛@2022 by online项目部</Footer>
            </Layout>

        </div>
    )
}
