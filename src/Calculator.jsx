import { useState } from 'react'

export function Calculator() {
    // ボタンの配置を表す配列（記述順に表示）
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', 'C', '=', '+'
    ];
    const [display, setDisplay] = useState("");
    const [isError, setIsError] = useState(false);
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;

    const handleClick = (btn) => {
        if(btn === "="){
            const match = display.match(validExpression);
            if (!match) {
                alert("無効な式です");
                setIsError(true);
                setDisplay("エラー");
                return;
            }
            const num1 = Number(match[1]); // 1つ目の整数
            const operator = match[2]; // 演算子
            const num2 = Number(match[3]); // 2つ目の整数
            let result;
            //演算子別の処理
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
                default:
                    result = "エラー";
            }
            setIsError(false);
            setDisplay(result);
            return;
        }
        if(btn === "C"){
            setIsError(false);
            setDisplay("");
            return;
        }
        setDisplay(display + btn);
    }
return (
        <div style={{ textAlign: "center" }}>
            <h2>電卓アプリ</h2>
            <div className={isError ? "display error" : "display"}>
                {display}
            </div>

            <div className='button-grid'>
                {buttons.map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
                ))}
            </div>
        </div>
    )
}