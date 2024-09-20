const btn = document.querySelector("button");
const box = document.querySelector("article");
const title = document.querySelector("h1");

btn.addEventListener("click", () => {
	//색상 모션 처리
	//색상값을 미리 지정된 키워드명이 아닌 16진수 표기법으로 변경해서 적용
	new Anime(box, { backgroundColor: "#ff69b4" }, { duration: 1000 });
	new Anime(title, { color: "#ff69b4" }, { duration: 2000 });
});
