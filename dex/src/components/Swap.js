import React, { useState } from "react";
import { Input, Popover, Radio, Modal, message } from "antd";
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Swap() {
  const [slippage, setSlippage] = useState(0.5);

  const handleSlippageChange = (e) => {
    setSlippage(e.target.value);
  };

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
      <div className="inputs"></div>
    </div>
  );
}

export default Swap;
