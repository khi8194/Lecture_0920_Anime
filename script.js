/*
실무에서 많이 쓰이는 업무 패턴
스크립트에서 필요로하는 정보값을 HTML요소에 커스텀 속성으로 담아주고
이벤트 발생시 이벤트 객체의 속성 정보값을 추출해서
반복코드 연산에 활용하는 방법
*/
/*
foreEach
: 배열, 유사배열을 반복처리하기 위한 내장 함수

Array.forEach((반복도는 배열데이터(data), 반복도는 순번(idx))=> {
    중괄호 안쪽의 코드블록은 배열의 갯수만큼 반복 처리됨
    해당 코드블록 안쪽에서는 data, idx라는 파라미터로 전달되는 값 활용 가능
    data : 현재 반복도는 배열의 데이터
    idx : 현재 반복도는 순서값 
});
*/

const btns = document.querySelectorAll("button");

btns.forEach((btn, idx) => {
	//forEach반복문 안쪽에서 반복도는 각 btn요소애 click 이벤트 연결
	btn.addEventListener("click", (event) => {
		//각 반복도는 btn요소 클릭시 자동으로 전달되는 event라는 객체 정보값 확인
		//각 반복도는 btn요소 클릭시 자동으로 전달되는 event.target
		//클릭이라는 이벤트가 발생한 바로 그 DOM요소 지침
		console.log(event.target);
		//이벤트가 발생한 해당 DOM요소에 지정된 data-pos라는 정보값 가져옴
		console.log(event.target.getAttribute("data-pos"));
	});
	// console.log(btn);
	// console.log(idx);
});

/*   <<< 본 코드 >>>


// btns.forEach((btn) => {
// 	btn.addEventListener("click", (event) => {
// 		// event 객체 안쪽의 target property에는 이벤트가 발생한 대상ㅇ (DOM)정보가 담겨 있음
// 		// console.log(event);
// 		// console.log(event.target);
// 		console.dir(event.target.dataset.pos);
// 		// console.log(event.target.getAttribute("data-pos"));

// 		//parseInt(문자화된 숫자값) : 정수로 반환
// 		//parseFloat(문자화된 숫자값) : 실수로 반환 (소숫점 아래까지 포함된 숫자)
// 		//
// 		new Anime(window, { scroll: parseInt(event.target.dataset.pos) });
// 	});
// });

*/
