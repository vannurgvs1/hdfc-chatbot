import Accordion from 'react-bootstrap/Accordion';
import {useEffect, useState} from "react";
import {getAccSummary} from "../../API";
import creditCard from "../../assets/images/credit_card.jpg"
import loanImage from "../../assets/images/loan_image.jpg"
import jsPDF from "jspdf";
import './dashboard.css';
import "jspdf-autotable";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import {Image, Space, Table, Typography} from "antd";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Dashboard(factory, deps) {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [accNumber, setAccNumber] = useState('');
    const [closeBalance, setCloseBalance] = useState('');

    useEffect(() => {
        setLoading(true);
        getAccSummary(localStorage.getItem('userId')).then((res) => {
            console.log(res)
            setDataSource(res.accountList[0].transactionList);
            setAccNumber(window.localStorage.getItem("accNumber"));
            setCloseBalance(res.accountList[0].accBalance);
            setLoading(false);
        });
    }, []);

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 200;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Summary Report";
        const headers = [["Date", "Reference #", "Narration", "Transaction #", "Debit", "Credit", "Closing Balance"]];

        const data = dataSource.map(elt => [
            elt.strdate,
            elt.refNo,
            elt.narration,
            elt.transId,
            elt.debt ? elt.debt : "",
            elt.credit ? elt.credit : "",
            elt.close_bal]);

        let content;
        if (data.length !== 0) {
            content = {
                startY: 50,
                head: headers,
                body: data
            };
        } else {
            content = {
                startY: 50,
                body: ["No Transactions Found."]
            };
        }

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("statement.pdf")
    }

    return (
        <>
            <Typography.Title level={4}>Account Summary</Typography.Title>
            <div className="col-12 row">
                <div className="col-9">
                    <img
                        width={680}
                        height={300}
                        src={creditCard}
                        alt="Image"/>
                    <div style={{marginTop: 20, width: "43rem"}}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Savings Account &nbsp;<Typography.Text
                                    type="danger"> {accNumber} </Typography.Text>&nbsp; Total Available Balance
                                    : &#8377; +
                                    <Typography.Text
                                        type={'success'}> {closeBalance} </Typography.Text></Accordion.Header>
                                <Accordion.Body>
                                    <Table
                                        loading={loading}
                                        columns={[
                                            {
                                                title: "Date",
                                                dataIndex: "strdate",
                                                render: (value) => <span>{value}</span>,
                                            },

                                            {
                                                title: "Reference #",
                                                dataIndex: "refNo",
                                                render: (value) => <span>{value}</span>,
                                            },
                                            {
                                                title: "Narration",
                                                dataIndex: "narration",
                                                render: (value) => <span>{value}</span>,
                                            },

                                            {
                                                title: "Transaction #",
                                                dataIndex: "transId",
                                                render: (value) => <span>{value}</span>,
                                            },
                                            {
                                                title: "Debit",
                                                dataIndex: "debt",
                                                render: (value) => value ? <span>&#8377;{value}</span> : "",
                                            },
                                            {
                                                title: "Credit",
                                                dataIndex: "credit",
                                                render: (value) => value ? <span>&#8377;{value}</span> : "",
                                            },
                                            {
                                                title: "Closing Balance",
                                                dataIndex: "close_bal",
                                                render: (value) => <span>&#8377;{value}</span>,
                                            },
                                        ]}
                                        dataSource={dataSource}
                                        pagination={{
                                            pageSize: 10,
                                            hideOnSinglePage: true
                                        }}
                                    ></Table>
                                    <a href="#" onClick={exportPDF} style={{marginLeft: 200}}>Click here to Download the
                                        Statement</a>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="col-3">
                    <img width="300" src={loanImage} alt=""/>
                </div>
            </div>
        </>
    );
}

export default Dashboard;