import React, { useState } from 'react';
import '../Game/TicTacToe.css';
import Modal from '../extras/modal';

const TicTacToe = () => {
	const [turn, setTurn] = useState('x');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();

	const checkForWinner = (squares) => {
        
        // arry of winning combos 
	let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

        // checking if there is a winning combo

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === '') {
					// do nothing
                } else if // all 3 squares are the same letter
                
                (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
					setWinner(squares[pattern[0]]);
				}
			});
		}
	};

    
	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

		let squares = [...cells];

		if (turn === 'x') {
			squares[num] = 'x';
			setTurn('o');
		} else {
			squares[num] = 'o';
			setTurn('x');
		}

		checkForWinner(squares);
		setCells(squares);
	};

	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

	return (
		<div className="container">
			<div style={{ padding: '20px' }}>
				<h1 className="font-bold text-4xl">
					Turn: <span> {turn}</span>
				</h1>
			</div>

			<table>
				<tbody>
					<tr>
						<Cell style={{ textAlign: 'center' }} num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			{winner && (
				<>
					<Modal theWinner={winner} restart={handleRestart} />
				</>
			)}
			
			<button
				style={{backgroundColor:"#D7AC68"}}
                  type="button"
                  className="w-100 my-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium text-black hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                  onClick={() => handleRestart()}
                >
                  Start Over?
                </button>
		</div>
	);
};

export default TicTacToe;
