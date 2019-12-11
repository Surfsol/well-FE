import React, {useState, useEffect} from 'react'
import AxiosWithAuth from '../../AxiosWithAuth'

//ant design style
import {Row, Col, Layout} from "antd"
const {Sider, Content} = Layout

const Monitor = ({history}) => {
    const [pumpData, setPumpData] = useState([]);
    const [funcPumps, setFuncPumps] = useState([]);
    const [unPumps, setUnPumps] = useState([]);
    const [nonPumps, setNonPumps] = useState([]);

    useEffect(() => {
        AxiosWithAuth()
          .get("https://welldone-db.herokuapp.com/api/sensors/recent")
          .then(res => {
            setPumpData(res.data);
            setFuncPumps(res.data.filter(pump => pump.status === 2));
            setUnPumps(res.data.filter(pump => pump.status === 1));
            setNonPumps(
              res.data.filter(pump => pump.status === 0 || pump.status === null)
            );
          });
      }, []);

      return(
          <div>
              <Layout style={{backgroundColor: "#E5E5E5"}}>
                <Sider>
                </Sider>
                </Layout>
          </div>
      )
}