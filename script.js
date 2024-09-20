const btns = document.querySelectorAll("button");
// const [btn1, btn2, btn3, btn4] = document.querySelectorAll("button");
const posArr = [0, 1000, 2000, 3000, 4000];

/*
btn1.addEventListener("click", () => {
	new Anime(window, { scroll: 0 }, { duration: 500 });
});
btn2.addEventListener("click", () => {
	new Anime(window, { scroll: 2000 }, { duration: 500 });
});
btn3.addEventListener("click", () => {
	new Anime(window, { scroll: 4000 }, { duration: 500 });
});
btn4.addEventListener("click", () => {
	new Anime(
		window,
		{ scroll: 4000 },
		{ callback: () => new Anime(window, { scroll: 0 }) }
	);
});
*/

//미션 - 위의 3개의 이벤트 구문을 반복문을 통해 하나로 축약
//btns 버튼 유사배열을 반복처리 (반복도는 각 버튼, 반복도는 순번)
btns.forEach((btn, idx) => {
	//내부적으로 파라미터로 전달되는 각 버튼 요소에 클릭 이벤트 연결
	btn.addEventListener("click", () => {
		//Anime의 scroll property값으로 posArr라는 위치모음 배열해서 현재반복도는 순번에 해당하는 위치값 연결
		new Anime(window, { scroll: posArr[idx] }, { duration: 500 });
	});
});

/*
오후1:25
사용하는 이유
1. 
2. 업무를 줄이기 위함
*/
