import React, { useState, useEffect } from "react";

// import { fetchTestData } from "../api/test-api";
import axios from "axios";

const TestPgConnection = () => {
  const [testData, setTestData] = useState([]);

  //   const getTestData = async () => {
  //     const data = await fetchTestData();
  //     console.log("data", data);
  //     setTestData(data);
  //   };

  const baseURL = "/api/test";

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setTestData(response.data);
    });
  }, []);

  //     getTestData();
  //   });
  return <h1>{testData}</h1>;
};

export default TestPgConnection;
