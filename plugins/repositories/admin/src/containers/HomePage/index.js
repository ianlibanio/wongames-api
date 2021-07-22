import React, { useState, useEffect, memo } from "react";

import axios from "axios";

import { Table, Label } from "@buffetjs/core";
import { Header } from "@buffetjs/custom";

import * as S from "./styles";

const headers = [
  {
    name: "Name",
    value: "name",
  },
  {
    name: "Description",
    value: "description",
  },
  {
    name: "Url",
    value: "html_url",
  },
];

const HomePage = () => {
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  const [val, setValue] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/ianlibanio/repos")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => strapi.notification.error(`${e}`));
  }, []);

  useEffect(() => {
    if (val) {
      setRows([])
      data.map((row) => {
        if (row.name.startsWith('wongames')) setRows(oldRows => [...oldRows, row])
      })
    } else {
      setRows(data)
    }
  }, [data, val])

  return (
    <S.Wrapper>
      <Header
        title={{ label: "Repositories" }}
        content="A list of Won Games repositories."
      />
      <Label>See only Won Games repositories?</Label>
      <S.Toggle
        name="toggle"
        onChange={({ target: { value } }) => setValue(value)}
        value={val}
        leftLabel="NO"
        rightLabel="YES"
      />
      <Table
        headers={headers}
        rows={rows}
        onClickRow={(e, data) => {
          window.open(data.html_url);
        }}
      />
    </S.Wrapper>
  );
};

export default memo(HomePage);
