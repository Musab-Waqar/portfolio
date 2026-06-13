import { useState } from "react";

type Piece = string | null;
type Board = Piece[][];
type Pos = { row: number; col: number } | null;

const INIT_BOARD: Board = [
  ["♜","♞","♝","♛","♚","♝","♞","♜"],
  ["♟","♟","♟","♟","♟","♟","♟","♟"],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  ["♙","♙","♙","♙","♙","♙","♙","♙"],
  ["♖","♘","♗","♕","♔","♗","♘","♖"],
];

const PUZZLE_BOARD: Board = [
  [null,null,null,null,"♚",null,null,null],
  [null,null,"♟",null,null,"♟","♟",null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,"♟","♙",null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,"♘",null,null],
  [null,null,null,null,null,"♙","♙",null],
  [null,null,null,null,"♔","♖",null,null],
];

const FILES = ["a","b","c","d","e","f","g","h"];
const RANKS = ["8","7","6","5","4","3","2","1"];
const WHITE = new Set(["♔","♕","♖","♗","♘","♙"]);
const BLACK = new Set(["♚","♛","♜","♝","♞","♟"]);

function isWhite(p: Piece) { return p ? WHITE.has(p) : false; }
function sameColor(a: Piece, b: Piece) {
  return (isWhite(a) && isWhite(b)) || (!!a && !isWhite(a) && !!b && !isWhite(b) && BLACK.has(b));
}
function copyBoard(b: Board): Board { return b.map(r => [...r]); }

export default function ChessCorner() {
  const [board, setBoard] = useState<Board>(INIT_BOARD.map(r => [...r]));
  const [selected, setSelected] = useState<Pos>(null);
  const [mode, setMode] = useState<"play"|"puzzle">("play");
  const [showSolution, setShowSolution] = useState(false);
  const [lastMove, setLastMove] = useState<{from: Pos; to: Pos}>({ from: null, to: null });
  const [turn, setTurn] = useState<"White"|"Black">("White");

  const click = (r: number, c: number) => {
    const piece = board[r][c];
    if (!selected) {
      if (piece) setSelected({ row: r, col: c });
      return;
    }
    const { row: sr, col: sc } = selected;
    const sel = board[sr][sc];
    if (sr === r && sc === c) { setSelected(null); return; }
    if (piece && sameColor(sel, piece)) { setSelected({ row: r, col: c }); return; }
    const nb = copyBoard(board);
    nb[r][c] = sel;
    nb[sr][sc] = null;
    setBoard(nb);
    setLastMove({ from: { row: sr, col: sc }, to: { row: r, col: c } });
    setSelected(null);
    setTurn(t => t === "White" ? "Black" : "White");
  };

  const reset = () => {
    setBoard(INIT_BOARD.map(r => [...r]));
    setSelected(null);
    setLastMove({ from: null, to: null });
    setTurn("White");
  };

  const loadPuzzle = () => {
    setBoard(PUZZLE_BOARD.map(r => [...r]));
    setSelected(null);
    setLastMove({ from: null, to: null });
    setShowSolution(false);
    setMode("puzzle");
    setTurn("White");
  };

  const isSelected = (r: number, c: number) => selected?.row === r && selected?.col === c;
  const isLast = (r: number, c: number) =>
    (lastMove.from?.row === r && lastMove.from?.col === c) ||
    (lastMove.to?.row === r && lastMove.to?.col === c);

  return (
    <section id="chess" data-testid="chess-section" className="py-24 border-t border-border">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex items-baseline justify-between mb-16 border-b border-border pb-4">
          <span className="text-xs font-mono tracking-[0.3em] text-foreground/40 uppercase">04 — Chess</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">The game of trees.</h2>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-16 items-start">
          {/* Board */}
          <div>
            {/* Controls */}
            <div className="flex items-center gap-4 mb-4">
              <button
                data-testid="chess-play-mode"
                onClick={() => { setMode("play"); reset(); }}
                className={`text-[10px] font-mono tracking-widest uppercase px-4 py-2 border transition-colors ${
                  mode === "play" ? "border-foreground bg-foreground text-background" : "border-border text-foreground/40 hover:text-foreground hover:border-foreground/40"
                }`}
              >Free Play</button>
              <button
                data-testid="chess-puzzle-mode"
                onClick={loadPuzzle}
                className={`text-[10px] font-mono tracking-widest uppercase px-4 py-2 border transition-colors ${
                  mode === "puzzle" ? "border-foreground bg-foreground text-background" : "border-border text-foreground/40 hover:text-foreground hover:border-foreground/40"
                }`}
              >Puzzle</button>
              <button
                data-testid="chess-reset"
                onClick={reset}
                className="ml-auto text-[10px] font-mono tracking-widest uppercase text-foreground/30 hover:text-foreground transition-colors"
              >Reset</button>
            </div>

            <div className="text-[10px] font-mono tracking-widest text-foreground/40 uppercase mb-3">
              {turn} to move {mode === "puzzle" ? "— Mate in 2" : ""}
            </div>

            {/* Board */}
            <div className="border border-border select-none">
              {board.map((row, r) => (
                <div key={r} className="flex">
                  <div className="w-6 flex items-center justify-center text-[10px] font-mono text-foreground/30 flex-shrink-0">
                    {RANKS[r]}
                  </div>
                  {row.map((piece, c) => {
                    const light = (r + c) % 2 === 0;
                    const sel = isSelected(r, c);
                    const last = isLast(r, c);
                    return (
                      <button
                        key={c}
                        data-testid={`chess-square-${FILES[c]}${RANKS[r]}`}
                        onClick={() => click(r, c)}
                        className={`w-14 h-14 flex items-center justify-center text-3xl transition-all cursor-pointer
                          ${sel ? "bg-primary/30 ring-2 ring-primary ring-inset" :
                            last ? (light ? "bg-yellow-100" : "bg-yellow-200/60") :
                            light ? "bg-[#f0d9b5]" : "bg-[#b58863]"}
                        `}
                      >
                        {piece && (
                          <span style={{ color: isWhite(piece) ? "#fff" : "#000", textShadow: isWhite(piece) ? "0 1px 3px rgba(0,0,0,0.8)" : "0 1px 2px rgba(255,255,255,0.3)" }}>
                            {piece}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
              <div className="flex pl-6">
                {FILES.map(f => (
                  <div key={f} className="w-14 text-center text-[10px] font-mono text-foreground/30 py-1">{f}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-12">
            <div>
              <div className="text-[10px] font-mono tracking-[0.3em] text-foreground/40 uppercase mb-6">Shannon Number</div>
              <div className="space-y-4 text-sm text-foreground/60 leading-relaxed">
                <p>Claude Shannon estimated the chess game tree at roughly 35 legal moves per position, lasting ~80 moves per game:</p>
                <div className="text-4xl font-black text-foreground tracking-tighter">
                  35<sup className="text-2xl">80</sup> ≈ 10<sup className="text-2xl">123</sup>
                </div>
                <p>More than atoms in the observable universe (~10<sup>80</sup>). Chess engines don't search exhaustively — they prune. Alpha-beta cutoffs. MCTS. Neural evaluation. Computation is the art of intelligent pruning.</p>
              </div>
            </div>

            {mode === "puzzle" && (
              <div>
                <div className="text-[10px] font-mono tracking-[0.3em] text-foreground/40 uppercase mb-4">Puzzle — Mate in 2</div>
                <p className="text-sm text-foreground/60 mb-4">White to move. Find the forced two-move checkmate. Click pieces on the board to play it out.</p>
                {!showSolution ? (
                  <button
                    data-testid="chess-show-solution"
                    onClick={() => setShowSolution(true)}
                    className="text-[10px] font-mono tracking-widest uppercase text-foreground/40 hover:text-foreground border-b border-transparent hover:border-foreground transition-all"
                  >
                    Reveal Solution →
                  </button>
                ) : (
                  <div className="font-mono text-sm space-y-2 border-l-2 border-primary pl-4">
                    <div><span className="text-primary">1.</span> Rf8+ Kxf8</div>
                    <div><span className="text-primary">2.</span> Nh7#</div>
                    <div className="text-xs text-foreground/40 mt-2">Rook sacrifice forces Kf8, knight delivers checkmate</div>
                  </div>
                )}
              </div>
            )}

            {mode === "play" && (
              <div>
                <div className="text-[10px] font-mono tracking-[0.3em] text-foreground/40 uppercase mb-4">How to play</div>
                <div className="space-y-2 text-sm text-foreground/50 font-mono">
                  <div>1. Click a piece to select</div>
                  <div>2. Click a square to move</div>
                  <div>3. Try Puzzle mode for Mate in 2</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
