import axios from "axios";

export default axios.create({
  baseURL: "https://datausa.io/api/data?drilldowns=State&measures=Population"
});
