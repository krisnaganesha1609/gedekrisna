export default function AsciiArt() {
  return (
    <figure
      className="max-w-full overflow-auto rounded-2xl bg-black/95 p-4 shadow-xl"
      role="img"
      aria-label="ASCII art by HeavensRevenge"
    >
      <pre
        className="m-0 whitespace-pre"
        style={{
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          fontSize: 14,
          lineHeight: 1.05,
          letterSpacing: 0.2,
          color: "#e5e5e5",
        }}
      >{String.raw`
                      _..._
                     /MMMMM\
                    (I8H#H8I)
                    (I8H#H8I)
                     \WWWWW/
                      I._.I
                      I._.I
                      I._.I
                      I._.I
                      I._.I
                      I._.I
                      I._.I
                      I.,.I
                     / /#\ \
                   .dH# # #Hb.
               _.~d#XXP I 7XX#b~,_
            _.dXV^XP^ Y X Y ^7X^VXb._
           /AP^   \PY   Y   Y7/   ^VA\
          /8/      \PP  I  77/      \8\
         /J/        IV     VI        \L\
         L|         |  \ /  |         |J
         V          |  | |  |          V
                    |  | |  |
                    |  | |  |
                    |  | |  |
                    |  | |  |
 _                  |  | |  |                  _
( \                 |  | |  |                 / )
 \ \                |  | |  |                / /
('\ \               |  | |  |               / /')
 \ \ \              |  | |  |              / / /
('\ \ \             |  | |  |             / / /')
 \ \ \ )            |  | |  |            ( / / /
('\ \( )            |  | |  |            ( )/ /')
 \ \ ( |            |  | |  |            | ) / /
  \ \( |            |  | |  |            | )/ /
   \ ( |            |  | |  |            | ) /
    \( |            |   Y   |            | )/
     | |            |   |   |            | |
     J | ___...~~--'|   |   |'--~~...___ | L
     >-+<...___     |   |   |     ___...>+-<
    /     __   '--~.L___L___J.~--'   __     \
    K    /  ' --.     d===b     .-- '  \    H
    \_._/        \   // I \\   /        \_._/
      '--~.._     \__\\ I //__/     _..~--'
             '--~~..____ ____..~~--'
                    |   T   |
                    |   |   |
                    |   |   |
                    |   |   |
                    |   |   |
                    |   |   |
                    |   |   |
                    |   |   |
                    |   |   |
                    |   |   |
                    |   |   |
                    |   |   |
                    |   |   |
                    I   '   I
                     \     /
                      \   /
                       \ /`}</pre>
      <figcaption
        className="mt-2 text-right text-xs"
        style={{
          color: "#9aa0a6",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
      >
        ASCII art by HeavensRevenge
      </figcaption>
    </figure>
  );
}
