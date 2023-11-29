import { useParams } from "react-router-dom";
import YourCalender from "./YourClaender";

const ProjectPage = () => {
  const param = useParams();
  return <>{param.name === "Your-Calender" && <YourCalender />}</>;
};

export default ProjectPage;
