import React from "react";
import Typography from "@mui/material/Typography";

import { hasValue } from "/imports/libs/hasValue";

import { simpleLabelStyle } from "./SimpleLabelViewStyle";
import Tooltip from "@mui/material/Tooltip";
import Info from "@mui/icons-material/InfoOutlined";

import * as appStyles from "../../../materialui/styles";

interface ISimpleLabelView {
  label: string;
  value?: string;
  style?: object;
}

export default ({ label, value, help, style }: ISimpleLabelView) => {
  return hasValue(value) || hasValue(label) ? (
    <div id={label} style={{ ...simpleLabelStyle.container }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          maxHeight: 30,
          justifyContent: "space-between",
        }}
      >
        {hasValue(label) ? (
          <label>
            <Typography
              variant={"body2"}
              color={"textSecondary"}
              style={
                !!style && !!style.displayLabel
                  ? style.displayLabel
                  : simpleLabelStyle.displayLabel
              }
            >
              {label}
            </Typography>
          </label>
        ) : null}
        {help && (
          <Tooltip title={help}>
            <Info style={{ color: appStyles.textSecondary, fontSize: 16 }} />
          </Tooltip>
        )}
      </div>
      {hasValue(value) ? (
        <Typography
          variant={"body2"}
          color={"textSecondary"}
          style={
            style && style.displayValue
              ? style.displayValue
              : simpleLabelStyle.displayLabel
          }
        >
          {value}
        </Typography>
      ) : null}
    </div>
  ) : null;
};
