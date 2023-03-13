import Container from '../components/Home/Container';

const Home = () => {
  return (
    <main className="bg-white min-h-screen h-screen min-w-full w-full def-fx-col  dark:bg-[#001E3C]">
      <h1 className="font-bold text-2xl text-sky-600 my-4 font-Rubik dark:text-white">
        GitHub User Finder
      </h1>
      <Container />
    </main>
  );
};

export default Home;
