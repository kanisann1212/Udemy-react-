import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const Video = forwardRef(({ path }, ref) => {
  const NewRef = useRef()

  useImperativeHandle(ref, () => ({
    MYpouse() {
      NewRef.current.pause()
    },
    MYplay() {
      NewRef.current.play()
    }
  }));

  return (
    <video style={{ maxWidth: "100%" }} ref={NewRef}>
      <source src={path}></source>
    </video>
  );
});

const Example = () => {
  const [playing, setPlaying] = useState(false);

  const ref = useRef();

  return (
    <div>
      <h3>完了</h3>
      <Video ref={ref} path="./sample.mp4" />
      <button
        onClick={() => {
          if (playing) {
            ref.current.MYpouse();
          } else {
            ref.current.MYplay()
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Example;
