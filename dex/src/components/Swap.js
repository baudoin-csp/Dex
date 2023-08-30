import React, { useState } from "react";
import { Input, Popover, Radio, Modal, Avatar, List } from "antd";
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import tokenList from "../tokenList.json";

function Swap() {
  const [slippage, setSlippage] = useState(0.5);
  const [tokenAmountOne, setTokenAmountOne] = useState(null);
  const [tokenAmountTwo, setTokenAmountTwo] = useState(null);
  const [tokenOne, setTokenOne] = useState(tokenList[1]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[5]);

  const handleSlippageChange = (e) => {
    setSlippage(e.target.value);
  };

  const changeAmount = (e) => {
    setTokenAmountOne(e.target.value);
  };

  const switchTokens = () => {
    let tempToken = tokenOne;
    setTokenOne(tokenTwo);
    setTokenTwo(tempToken);
  };

  const position = "bottom";
  const align = "center";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slippageOptions = [
    { label: "0.5%", value: 0.5 },
    { label: "2.5%", value: 2.5 },
    { label: "5.0%", value: 5.0 },
  ];

  const settings = (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group
          colorText="white"
          options={slippageOptions}
          onChange={handleSlippageChange}
          value={slippage}
          optionType="button"
        />
      </div>
    </>
  );

  return (
    <>
      <>
        <Modal
          title="Select a token"
          open={isModalOpen}
          footer={null}
          onCancel={() => setIsModalOpen(false)}
        >
          <>
            <List
              pagination={{ position, align }}
              dataSource={tokenList}
              renderItem={(token) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar className="tokenLogo" src={token.img} />}
                    title={token.name}
                    description={token.ticker}
                  />
                </List.Item>
              )}
            />
          </>
        </Modal>
      </>
      <div className="tradeBox">
        <div className="tradeBoxHeader">
          <h4>Swap</h4>
          <Popover
            content={settings}
            title="Settings"
            trigger="click"
            placement="bottomRight"
          >
            <SettingOutlined className="cog" />
          </Popover>
        </div>
        <div className="inputs">
          <Input
            placeholder="0"
            value={tokenAmountOne}
            onChange={changeAmount}
          />
          <Input placeholder="0" value={tokenAmountTwo} disabled={true} />
          <div className="switchButton" onClick={switchTokens}>
            <ArrowDownOutlined className="switchArrow" />
          </div>
          <div className="assetOne" onClick={() => setIsModalOpen(true)}>
            <img src={tokenOne.img} alt="assetOneLogo" className="assetLogo" />
            {tokenOne.ticker}
            <DownOutlined />
          </div>
          <div className="assetTwo" onClick={() => setIsModalOpen(true)}>
            <img src={tokenTwo.img} alt="assetTwoLogo" className="assetLogo" />
            {tokenTwo.ticker}
            <DownOutlined />
          </div>
        </div>
      </div>
    </>
  );
}

export default Swap;
