import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Canvas() {
  const canvasRef = useRef(null);
  const drawing = useRef(false);

  const roomId = "room1"; // later make dynamic

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // join room
    socket.emit("join-room", roomId);

    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    const getPosition = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const startDrawing = (e) => {
      drawing.current = true;

      const { x, y } = getPosition(e);
      ctx.beginPath();
      ctx.moveTo(x, y);

      socket.emit("draw", { roomId, x, y });
    };

    const stopDrawing = () => {
      drawing.current = false;
      ctx.beginPath();
    };

    const draw = (e) => {
      if (!drawing.current) return;

      const { x, y } = getPosition(e);

      ctx.lineTo(x, y);
      ctx.stroke();

      socket.emit("draw", { roomId, x, y });
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);
    canvas.addEventListener("mousemove", draw);

    socket.on("draw", ({ x, y }) => {
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    });

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    return () => {
      socket.off("draw");
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1123}
      height={500}
      style={{ border: "2px solid black" }}
    />
  );
}