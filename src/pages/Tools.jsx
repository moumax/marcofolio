import Graphism from "../components/utils/tools/Graphism";
import Git from "../components/utils/tools/Git";
import Npm from "../components/utils//tools/Npm";

import dataNpm from "../Datas/tools/dataNpm";
import dataGraphism from "../Datas/tools/dataGraphism";
import dataGit from "../Datas/tools/dataGit";

/*  One data file like dataNpm, one component who displays the data, one master component to map throught the data Array. */

const Tools = () => {
  const subTitle = "text-2xl  font-bold";
  const site = "text-xl text-red-400";
  return (
    <div className="text-black">
      <div>
        {dataGraphism.map((data) => (
          <Graphism data={data} key={data.id} />
        ))}
      </div>
      <div>
        {dataGit.map((data) => (
          <Git data={data} key={data.id} />
        ))}
      </div>
      <div>
        {dataNpm.map((data) => (
          <Npm data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
