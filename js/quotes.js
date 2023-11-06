const quotes = [
    {
        quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다.",
        author: "랄프 왈도 에머슨",
    },
    {
        quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오. ",
        author: "헬렌 켈러",
    },
    {
        quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author: "헨리 포드",
    },
    {
        quote: "최고에 도달하려면 최저에서 시작하라.",
        author: "P.시루스",
    },
    {
        quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
        author: "나딘 스테어",
    },
    {
        quote: "인생에서 원하는 것을 엇기 위한 첫번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
        author: "벤스타인",
    },
    {
        quote: "우선 무엇이 되고자 하는가를 자신에게 말하라. 그리고 해야 할일을 하라.",
        author: "에픽토테스",
    },
    {
        quote: "직접 눈으로 본 일도 오히려 참인지 아닌지 염려스러운데 더구나 등뒤에서 남이 말하는 것이야 어찌 이것을 깊이 믿을 수 있으랴?",
        author: "명심보감",
    },
    {
        quote: "누군가를 설득하기 전에 자신부터 설득하라. 만일 자신을 설득하지 못하는 일이라면 그만 포기하라.",
        author: "존 핸리 패터슨",
    },
    {
        quote: "실패한 고통보다 최선을 다하지 못했음을 깨닫는 것이 몇 배는 더 고통스럽다.",
        author: "앤드류 매튜스",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}`;