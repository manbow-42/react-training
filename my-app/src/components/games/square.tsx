type SquareProps = {
  backColor: string
  fontColor: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  value: string | null
}

function Square(props: SquareProps) {
  return (
    <button
    //クラス名で盤面とフォントの色を切り替える
    className={`
    square
    ${props.backColor}
    ${props.fontColor}
    `}
    onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square