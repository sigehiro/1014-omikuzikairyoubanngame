let btn= document.getElementById('btn');

btn.addEventListener('click', omikuji);

function omikuji() {
  let res = [
    'ゴリラのモノマネをする',
    'シャンナロー！最初に目が合った人にデコピン！',
    '今から10分間片目でいる',
    '今から日本語禁止破れば、1杯酒を飲む',
    '今から英語禁止破れば１杯酒を飲む',
    '今まで隠していた自分の秘密を告白！',
    '今いる人の中で１番好きな人と手をつなぐ',
    'ご馳走様です。今日の飲み会はあなたの奢りです',
    'あまり会話した事がない人と固く握手',
    '１０秒以内に泣く。できなければ右隣からシッペ',
    '今から帰るまでレディーファースト',
    'ドヤ顔をする！3,2,1,!!!',
    'チョッパーになりきってダンス！',
    '今から食べれるものは肉のみ!!',
    'レガーンの構えから左隣の人にデコピン',
    '次のお酒を注文！届くまでに飲み干す'];

  let randomNum = Math.random();
  let result = document.getElementById('result');
  let num = Math.floor(randomNum * res.length);
  let bg = document.getElementById('bg');

  result.textContent = res[num];



  switch (num) {
    case 0:
      bg.style.backgroundImage = 'url("assets///img/gori.jpeg")';
      break;
    case 1:
      bg.style.backgroundImage='url("assets///img/haruna.jpg")'
      break;
    case 2:
      bg.style.backgroundImage='url("assets///img/hiei.jpeg")'
      break;
    case 3:
      bg.style.backgroundImage='url("assets///img/kurama.jpg")'
      break;

    case 4:
      bg.style.backgroundImage='url("assets///img/kuwahara.jpeg")'
      break;
    case 5:
      bg.style.backgroundImage='url("assets///img/nami.jpg")'
      break;
    case 6:
      bg.style.backgroundImage='url("assets///img/naruto.jpg")'
      break;

    case 7:
      bg.style.backgroundImage='url("assets///img/ruci.jpeg")'
      break;

    case 8:
      bg.style.backgroundImage='url("assets///img/rukawa.jpg")'
      break;

    case 9:
      bg.style.backgroundImage='url("assets///img/sakuragi.jpg")'
      break;

    case 10:
      bg.style.backgroundImage='url("assets///img/sannji.jpg")'
      break;

    case 11:
      bg.style.backgroundImage='url("assets///img/sasuke.jpg")'
      break;

    case 12:
      bg.style.backgroundImage='url("assets///img/tyoppa.jpg")'
      break;

    case 13:
      bg.style.backgroundImage='url("assets///img/tyouzi.jpg")'
      break;

    case 14:
      bg.style.backgroundImage='url("assets///img/yuusuke.png")'
      break;

    case 15:
      bg.style.backgroundImage='url("assets///img/zoro.jpg")'
      break;
    }
}

//カミーユ解答

// btn.addEventListener('click', luckcolor);
// function luckcolor() {
//   // 0 ~ 4
//   // let res = ['赤', '青', '黒', '白', '紫', '緑']; //結果の配列
//   let res = { 0: ['red', '赤'], 1: ['blue', '青'], 2: ['black', '黑'], 3: ['white', '白'], 4: ['purple', '紫'], 5: ['green', '綠'] }; //結果の配列
//   let randomNum = Math.random();
//   let result = document.getElementById('result');
//   let resultContainer = document.getElementById('result-container');
//   // Math.floor
//   // Math.ceil
//   // Math.round
//   // 0, 1, 2, 3, 4
//   // console.log(Math.floor(randomNum * res.length));
//   let num = Math.floor(randomNum * Object.keys(res).length);

//   // result.textContent = res[num][1];
//   // resultContainer.style.backgroundColor = res[num][0];
// }

