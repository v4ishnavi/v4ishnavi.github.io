'use client';
import {useEffect, useRef, useState} from 'react';

const W = 640;
const H = 180;
const GROUND = H - 24;
const GRAVITY = 0.7;
const JUMP = -11.5;
const START_SPEED = 2.5;

type Obstacle = {x: number; w: number; h: number};

// A small take on the offline dinosaur game: jump over the cacti, it gets 1.5x faster at 5, 25, 125… points.
export default function DinoGame() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [state, setState] = useState<'ready' | 'running' | 'over'>('ready');

  useEffect(() => {
    try {
      setBest(Number(localStorage.getItem('dino-best')) || 0);
    } catch {}
  }, []);

  useEffect(() => {
    const ctx = canvas.current!.getContext('2d')!;
    // Read on every draw so the light/dark toggle applies mid-game.
    const color = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    let y = GROUND;
    let vy = 0;
    let speed = START_SPEED;
    let nextLevel = 5;
    let frame = 0;
    let points = 0;
    let nextGap = 60;
    let obstacles: Obstacle[] = [];
    let running = false;
    let raf = 0;

    const reset = () => {
      y = GROUND;
      vy = 0;
      speed = START_SPEED;
      nextLevel = 5;
      frame = 0;
      points = 0;
      nextGap = 60;
      obstacles = [];
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = color('--line');
      ctx.fillRect(0, GROUND, W, 2);

      // The dinosaur: body, head, eye and legs that alternate while running.
      const x = 40;
      ctx.fillStyle = color('--accent');
      ctx.fillRect(x, y - 30, 22, 22);
      ctx.fillRect(x + 12, y - 42, 20, 14);
      ctx.fillRect(x - 8, y - 26, 8, 6);
      const step = running && y === GROUND ? Math.floor(frame / 6) % 2 : 0;
      ctx.fillRect(x + 3, y - 8, 5, step ? 8 : 4);
      ctx.fillRect(x + 14, y - 8, 5, step ? 4 : 8);
      ctx.fillStyle = color('--bg');
      ctx.fillRect(x + 24, y - 39, 3, 3);

      ctx.fillStyle = color('--accent-2');
      for (const o of obstacles) {
        ctx.fillRect(o.x, GROUND - o.h, o.w, o.h);
        ctx.fillRect(o.x - 5, GROUND - o.h + 10, 5, 10);
        ctx.fillRect(o.x + o.w, GROUND - o.h + 6, 5, 10);
      }
    };

    const tick = () => {
      frame++;
      vy += GRAVITY;
      y = Math.min(GROUND, y + vy);
      if (y === GROUND) vy = 0;

      for (const o of obstacles) o.x -= speed;
      obstacles = obstacles.filter((o) => o.x + o.w > -10);
      if (--nextGap <= 0) {
        const h = 22 + Math.random() * 22;
        obstacles.push({x: W, w: 10 + Math.random() * 12, h});
        nextGap = 45 + Math.random() * 70;
      }

      const hit = obstacles.some((o) => o.x < 40 + 26 && o.x + o.w > 40 + 2 && y > GROUND - o.h + 4);
      if (frame % 6 === 0) {
        setScore(++points);
        if (points >= nextLevel) {
          speed *= 1.5;
          nextLevel *= 5;
        }
      }
      draw();
      if (hit) {
        running = false;
        setState('over');
        setBest((b) => {
          const next = Math.max(b, points);
          try {
            localStorage.setItem('dino-best', String(next));
          } catch {}
          return next;
        });
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const jump = () => {
      if (!running) {
        reset();
        setScore(0);
        running = true;
        setState('running');
        raf = requestAnimationFrame(tick);
      }
      if (y === GROUND) vy = JUMP;
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    };
    const el = canvas.current!;
    el.addEventListener('pointerdown', jump);
    window.addEventListener('keydown', onKey);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointerdown', jump);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="dino">
      <div className="dino-score soft">
        <span>score {score}</span>
        <span>best {best}</span>
      </div>
      <canvas ref={canvas} width={W} height={H} aria-label="Dinosaur jumping game" />
      <p className="soft">
        {state === 'over' ? 'Oops. Space or tap to try again.' : state === 'ready' ? 'Press space or tap to start.' : 'Space or tap to jump.'}
      </p>
    </div>
  );
}
