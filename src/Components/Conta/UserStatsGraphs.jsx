import React from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState(null);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map(({ title, acessos }) => {
      return {
        x: title,
        y: Number(acessos),
      };
    });

    setGraph(graphData);
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
  }, [data]);

  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Total de acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
            labels: { fontSize: 14, fill: "#333" },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
