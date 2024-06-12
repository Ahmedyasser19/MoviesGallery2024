import Content from "../src/components/content/Content";
import LeftBar from "../src/components/lefbar/LeftBar";
import RightBar from "../src/components/rightbar/RightBar";
const HomePage = () => {
  return (
    <>
      <div className="App">
        <LeftBar />
        <Content />
        <RightBar />
      </div>
    </>
  );
};

export default HomePage;
