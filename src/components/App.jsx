import React from "react";
import Header from "./Header";
import useFetch from "./useFetch";
import State from "./State";
import Footer from "./Footer";

export default function App() {
  const { data, setData } = useFetch();
  return (
    <div>
      <Header />
      <main>
        <input
          type="text"
          placeholder="Type the state name"
          value={data.slug}
          onChange={(e) => setData({ ...data, slug: e.target.value })}
        />
        <br />
        {data.results.length > 0 ? <State state={data.results[0]} /> : null}
      </main>
      <Footer />
    </div>
  );
}
