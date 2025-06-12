import { createSignal, type JSX } from "solid-js";

export default function Counter(props: { children?: JSX.Element }) {
  const [count, setCount] = createSignal(0);
  const add = () => setCount(count() + 1);
  const subtract = () => setCount(count() - 1);

  return (
    <>
      <div class="mt-12 grid grid-cols-3 place-items-center text-3xl">
        <button onClick={subtract} class="btn">
          -
        </button>
        <pre>{count()}</pre>
        <button onClick={add} class="btn">
          +
        </button>
      </div>
      <div class="mt-8 text-center">{props.children}</div>
    </>
  );
}
