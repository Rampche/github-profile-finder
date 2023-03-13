import Container from '../components/Home/Container';

const Home = () => {
  return (
    <main className="min-h-screen h-screen min-w-full w-screen def-fx-col dark:bg-black">
      <h1 className="font-bold text-2xl text-sky-600 my-4 font-Rubik">
        GitHub User Finder
      </h1>
      <Container />
    </main>
  );
};

export default Home;
