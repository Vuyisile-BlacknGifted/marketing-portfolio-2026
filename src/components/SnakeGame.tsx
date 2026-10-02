"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
};

type Direction = Point;

const GRID_SIZE = 12;
const START_SNAKE: Point[] = [
  { x: 5, y: 6 },
  { x: 4, y: 6 },
  { x: 3, y: 6 }
];
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};

function isOppositeDirection(current: Direction, next: Direction) {
  return current.x + next.x === 0 && current.y + next.y === 0;
}

function getRandomFood(snake: Point[]): Point {
  const occupied = new Set(snake.map((segment) => `${segment.x},${segment.y}`));
  const cells: Point[] = [];

  for (let y = 0; y < GRID_SIZE; y += 1) {
    for (let x = 0; x < GRID_SIZE; x += 1) {
      if (!occupied.has(`${x},${y}`)) {
        cells.push({ x, y });
      }
    }
  }

  return cells[Math.floor(Math.random() * cells.length)] ?? { x: 0, y: 0 };
}

export default function SnakeGame() {
  const [snake, setSnake] = useState<Point[]>(START_SNAKE);
  const [direction, setDirection] = useState<Direction>({ x: 1, y: 0 });
  const [food, setFood] = useState<Point>({ x: 9, y: 6 });
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const nextDirectionRef = useRef<Direction>({ x: 1, y: 0 });

  const cells = useMemo(() => {
    return Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
      const x = index % GRID_SIZE;
      const y = Math.floor(index / GRID_SIZE);
      const isHead = snake[0]?.x === x && snake[0]?.y === y;
      const isBody = snake.some((segment, segmentIndex) => segmentIndex > 0 && segment.x === x && segment.y === y);
      const isFood = food.x === x && food.y === y;

      return {
        x,
        y,
        isHead,
        isBody,
        isFood
      };
    });
  }, [snake, food]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newDirection = DIRECTIONS[event.key as keyof typeof DIRECTIONS];

      if (!newDirection) {
        return;
      }

      if (isOppositeDirection(direction, newDirection)) {
        return;
      }

      nextDirectionRef.current = newDirection;
      setDirection(newDirection);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (isGameOver) {
      return;
    }

    const tick = window.setInterval(() => {
      setSnake((currentSnake) => {
        const currentDirection = nextDirectionRef.current;
        const head = currentSnake[0];
        const nextHead = {
          x: head.x + currentDirection.x,
          y: head.y + currentDirection.y
        };

        const willHitWall =
          nextHead.x < 0 ||
          nextHead.x >= GRID_SIZE ||
          nextHead.y < 0 ||
          nextHead.y >= GRID_SIZE;

        const willHitSelf = currentSnake.some(
          (segment, index) => index < currentSnake.length - 1 && segment.x === nextHead.x && segment.y === nextHead.y
        );

        if (willHitWall || willHitSelf) {
          setIsGameOver(true);
          setBestScore((previousBest) => Math.max(previousBest, score));
          return currentSnake;
        }

        const ateFood = nextHead.x === food.x && nextHead.y === food.y;
        const nextSnake = [nextHead, ...currentSnake];

        if (!ateFood) {
          nextSnake.pop();
        } else {
          const newScore = score + 10;
          setScore(newScore);
          setBestScore((previousBest) => Math.max(previousBest, newScore));
          setFood(getRandomFood(nextSnake));
        }

        return nextSnake;
      });
    }, 150);

    return () => window.clearInterval(tick);
  }, [food, isGameOver, score]);

  const restartGame = () => {
    setSnake(START_SNAKE);
    setDirection({ x: 1, y: 0 });
    nextDirectionRef.current = { x: 1, y: 0 };
    setFood({ x: 9, y: 6 });
    setScore(0);
    setIsGameOver(false);
  };

  const moveByButton = (next: Direction) => {
    if (isGameOver) {
      return;
    }

    if (isOppositeDirection(direction, next)) {
      return;
    }

    nextDirectionRef.current = next;
    setDirection(next);
  };

  return (
    <div className="snake-game-shell">
      <div className="snake-header">
        <div>
          <p className="snake-label">Portfolio Arcade</p>
          <h3>Snake Challenge</h3>
        </div>
        <div className="snake-score-group">
          <span>Score {score}</span>
          <span>Best {bestScore}</span>
        </div>
      </div>

      <div className="snake-board" aria-label="Snake game board">
        {cells.map(({ x, y, isHead, isBody, isFood }) => (
          <div
            key={`${x}-${y}`}
            className={[
              "snake-cell",
              isHead ? "snake-head" : "",
              isBody ? "snake-body" : "",
              isFood ? "snake-food" : ""
            ].join(" ")}
          />
        ))}

        {isGameOver && (
          <div className="snake-overlay">
            <div>
              <p>Game Over</p>
              <button type="button" onClick={restartGame}>
                Play again
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="snake-controls" aria-label="Snake game controls">
        <button type="button" onClick={() => moveByButton({ x: 0, y: -1 })} aria-label="Move up">
          ↑
        </button>
        <div className="snake-controls-row">
          <button type="button" onClick={() => moveByButton({ x: -1, y: 0 })} aria-label="Move left">
            ←
          </button>
          <button type="button" onClick={() => moveByButton({ x: 1, y: 0 })} aria-label="Move right">
            →
          </button>
        </div>
        <button type="button" onClick={() => moveByButton({ x: 0, y: 1 })} aria-label="Move down">
          ↓
        </button>
      </div>
    </div>
  );
}
