export default function App({ createNotebook }) {
  return (
    <>
      <div>
        <h1>Hi!</h1>
        <button
          onClick={() => {
            createNotebook();
          }}
        >
          Create Notebook
        </button>
      </div>
    </>
  );
}
