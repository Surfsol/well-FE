import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../../AxiosWithAuth";

import StaticMenu from "./StaticMenu";
import StatusCards from './StatusCards'

//ant design style
import { Row, Col, Layout } from "antd";
const { Sider, Content } = Layout;

//props.history
const Monitors = ({ history }) => {
  const [pumpData, setPumpData] = useState([]);
  const [funcPumps, setFuncPumps] = useState([]);
  const [unPumps, setUnPumps] = useState([]);
  const [nonPumps, setNonPumps] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get("https://well-done-staging.herokuapp.com/api/sensors/recent")
      .then(res => {
        console.log(res.data)
        setPumpData(res.data);
        setFuncPumps(res.data.filter(pump => pump.status === 2));
        setUnPumps(res.data.filter(pump => pump.status === 1));
        setNonPumps(
          res.data.filter(pump => pump.status === 0 || pump.status === null)
        );
      });
  }, []);

  return (
    <div>
      <Layout style={{ backgroundColor: "#E5E5E5" }}>
        <Sider>
          {/* history sent as props, bun not used */}
          <StaticMenu history={history} />
        </Sider>
        <Content>
          {/* legend */}
          <Row type="flex" justify="start">
            <Col span={23} offset={1}>
              {/* <Legend /> */}
            </Col>
          </Row>

          {/* Cards */}
          <Row type="flex" justify="space-around">
            <Col span={20}>
              <StatusCards
                pumpData={pumpData}
                funcPumps={funcPumps}
                unPumps={unPumps}
                nonPumps={nonPumps}
              />
            </Col>
          </Row>

            

        </Content>
      </Layout>
    </div>
  );
};
export default Monitors;
