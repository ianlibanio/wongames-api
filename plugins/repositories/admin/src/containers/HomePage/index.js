import React, { useState, useEffect, memo } from "react";

import axios from "axios";
import styled from "styled-components";

import { Table } from "@buffetjs/core";
import { Header } from "@buffetjs/custom";

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1.5rem;
  }
`;

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
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/ianlibanio/repos")
      .then((res) => {
        res.data.map((data) => {
          if (data.name.startsWith('wongames')) setRows(oldRows => [oldRows, data])
        })
      })
      .catch(e => strapi.notification.error(`${e}`));
  }, []);

  return (
    <Wrapper>
      <Header
        title={{ label: "Repositories" }}
        content="A list of Won Games repositories."
      />
      <Table
        headers={headers}
        rows={rows}
        onClickRow={(e, data) => {
          window.open(data.html_url);
        }}
      />
    </Wrapper>
  );
};

export default memo(HomePage);
