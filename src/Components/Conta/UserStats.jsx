import React, { Suspense } from "react";
import useFetch from "../../Hooks/useFetch.jsx";
import { STATS_GET } from "../../api.js";
import Loading from "../../Helper/Loading.jsx";
import Error from "../../Helper/Error.jsx";
import Head from "../../Helper/Head.jsx";
import { Rect } from "victory";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs.jsx"));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
      console.log("data: ", data);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<Loading />}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStats;
