const btn = document.querySelector("button");
const box = document.querySelector("article");
// const title = document.querySelector("h1");

btn.addEventListener("click", () => {
	//색상 모션 처리
	//색상값을 미리 지정된 키워드명이 아닌 16진수 표기법으로 변경해서 적용
	new Anime(
		box,
		{ left: 1000 },
		{
			duration: 1000,
			//상위 Anime구문이 끝나는 바로 그 순간 이어서 동기적(이전 작업이 모든 끝난 이후에)으로 새로운 모션을 이어서 실행
			callback: () =>
				new Anime(
					box,
					{ top: 500, backgroundColor: "#04b568" },
					//계속해서 callback으로 모션을 시퀀셜 처리 가능
					{
						duration: 500,
						callback: () => new Anime(box, { left: 0 }),
					}
				),
		}
	);
});
