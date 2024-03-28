
import './App.css'
import Cards from './card'

function App() {

  const details=[ [
    {image:"images/batch1/01.jpeg",
      name:"『ピクサー・ベスト』",
    description:"​ピクサー音楽の究極のベスト盤アルバム！3月20日CD発売／デジタル配信​​"},
    {image:"images/batch1/02.jpeg",
      name:"5～6月、全国で開催！』",
    description:"​「ディズニー・オン・クラシック ～夢とまほうの贈りもの 2024」人気作品の数々をオーケストラで​"},
    {image:"images/batch1/03.jpeg",
      name:"3月はミニーに注目",
    description:"​オシャレで楽しいことが大好き、いつもポジティブなミニーマウスにインスパイアされて春を楽しもう！​"},
    {image:"images/batch1/04.jpeg",
      name:"ディズニー・パルパルーザ",
    description:"​東京ディズニーランド「ディズニー・パルパルーザ」第2弾「ドナルドのクワッキー・ダックシティ」開催​​"}],
// ?????????????????????????????????????????????????????????????????????????????????????????????????????????????
    [
      {image:"images/batch2/01.jpeg",
        name:"ニュース",
      description:"D23、2024年度『ディズニー・レジェンド・アワード』の豪華受賞者を発表『D23: アルティメット・ディズニーファン・イベント』、比類ないプログラム満載の週末を締めくくる壮大な『ディズニー・レジェンド・アワード』授賞式を開催​",
      info:"024年3月27日"},

      {image:"images/batch2/02.jpeg",
        name:" ニュース",
      description:"アカチャンホンポに『ディズニー・オルゴール』フォトスポット登場！​",
      info:"2024年3月26日"},
      
      {image:"images/batch2/03.jpeg",
        name:"ニュース",
      description:"こだわりインテリアでもっとお気に入りの部屋に！ 「ディズニーストアマガジン」でおすすめアイテムをご紹介 ＜ディズニーストア/ディズニーストア.jp＞！​",
      info:"2024年3月28日"},

      {image:"images/batch2/04.jpeg",
        name:"ニュース",
      description:"大盛況のうちに終了いたしました！ディズニー・ワールド・ビート 2024：Music Journey～世界の旅へ！​​ ​",
      info:"2024年3月28日"}
      ],
// ------------------------------------------------------------------------------------------
[
  {image:"images/batch3/01.jpeg",
    name:"今月のおすすめ作品",
  description:"ディズニープラスの作品配信予定をご紹介。新作映画やオリジナル作品が続々登場！​"},
  {image:"images/batch3/02.jpeg",
    name:"ファイナルシーズン",
  description:"『スター・ウォーズ：バッド・バッチ』シーズン3が独占配信中。物語はついに完結へ！ ​"},
  {image:"images/batch3/03.jpeg",
    name:"オリジナルシリーズ",
  description:"『イワジュ』全6話が一挙独占配信中！近未来のナイジェリア、ラゴスを舞台に描くSFアニメーション。​"},
  {image:"images/batch3/04.jpeg",
    name:"ディズニープラス",
  description:"ディズニー公式動画配信サービス。名作・話題作に加え、海外ドラマや日本のコンテンツも見放題。​​"}],
// ------------------------------------------------------------------------------------------
[
  {image:"images/batch4/01.jpeg",
    name:"チップ＆デールのお誕生日記念グ",
  description:"ッズ​​"},
  {image:"images/batch4/02.jpeg",
    name:"さりげなミッキーアイテム",
  description:"URBAN RESEARCH ほか​"},
  {image:"images/batch4/03.jpeg",
    name:"歓送迎シーズンにおすすめのギフ",
  description:"トアイテム​"},
  {image:"images/batch4/04.jpeg",
    name:"ディズニー プラがまぐち ほか",
  description:" きゃらマルシェ​​"}],

  [
    {image:"images/batch5/01.jpeg",
      name:"チップ＆デールのお誕生日記念グ",
    description:"ッズ​​"},
    {image:"images/batch5/02.jpeg",
      name:"さりげなミッキーアイテム",
    description:"URBAN RESEARCH ほか​"},
    {image:"images/batch5/03.jpeg",
      name:"歓送迎シーズンにおすすめのギフ",
    description:"トアイテム​"},
    {image:"images/batch5/04.jpeg",
      name:"ディズニー プラがまぐち ほか",
    description:" きゃらマルシェ​​"},
    {image:"images/batch5/05.jpeg",
    name:"ディズニー プラがまぐち ほか",
  description:" きゃらマルシェ​​"}],

  ["images/batch6/01.jpeg", "images/batch6/02.jpeg","images/batch6/03.jpeg", "images/batch6/04.jpeg"],
  ["images/batch7/01.jpeg", "images/batch7/02.jpeg","images/batch7/03.jpeg", "images/batch7/04.jpeg", "images/batch7/05.jpeg"],
  ["images/circle-dolls/01.png", "images/circle-dolls/02.png","images/circle-dolls/03.png", "images/circle-dolls/04.png", "images/circle-dolls/05.png",
  "images/circle-dolls/06.png", "images/circle-dolls/07.png","images/circle-dolls/08.png", "images/circle-dolls/09.png", "images/circle-dolls/10.png",
  "images/circle-dolls/11.png", "images/circle-dolls/12.png","images/circle-dolls/13.png", "images/circle-dolls/14.png", "images/circle-dolls/15.png",
  "images/circle-dolls/16.png", "images/circle-dolls/17.png","images/circle-dolls/18.png"],
  ["images/icons/01.svg", "images/icons/02.svg","images/icons/03.svg", "images/icons/04.svg"]
  ]

  return (
    <>
      
        <nav>
          <div className='disney'>
            <img src="images/icons/disney_logo_c77826a6.png" alt="" />
          </div>
          {/* <div> */}
            <ul>
              <li><a href="">ディズニープラス</a></li>
              <li>ショッピング</li>
              <li>映画</li>
              <li>TV</li>
              <li>パーク＆リゾート</li>
              <li><a href="">ミュージック</a></li>
              <li><a href="">ライブ＆イベント</a></li>
              <li><a href="">ゲーム</a></li>
              <li><a href="">メニュー</a></li>
            </ul>
          {/* </div> */}
          <form action="">
            <input placeholder='サイト内で検索' type="text" />
            <button type="button"><img src="images/icons/download.png" alt="" /></button>
          </form>
        </nav>
        <section className='hero'>
          <div className='text'>
            <h2>ディズニー＆ピクサーの“泣ける名作”３本、劇場公開</h2>
            <br />
            <p>アカデミー賞®長編アニメーション賞にノミネートされた珠玉の名作３本が、大スクリーンにやってくる！</p>
          </div>
          <div className='image'>
            <img src="images/hero.jpeg" alt="" />

          </div>

        </section>

{/* -------------------------------------------------------------------------------------------------------- */}

        <section className='afterHero1'>

          <div className='imageDiv'>
            {details[0].map((item, index)=>{
              return(
                <Cards key={index} image={item.image} name={item.name} description={item.description} ></Cards>
              )
            })}

          </div>

          </section>

        <section className='afterHero2'>
        
          <h3>ニュース</h3>

          <div className='imageDiv'>
          {details[1].map((item, index)=>{
            return(
              <Cards key={index} image={item.image} name={item.name} description={item.description} info={item.info}></Cards>
            )
          })}
          </div>
          <div className='link'><a href="">ニュース一覧へ</a></div>
      

        </section>
      
{/* ---------------------------------------------------------------------------------------------------------- */}
        <section className="afterHero3">
          <h3>ディズニープラス おすすめ情報</h3>

          <div className='imageDiv'>
          {details[2].map((item, index)=>{
              return(
                <Cards key={index} image={item.image} name={item.name} description={item.description}></Cards>
              )
            })}
          
          </div>
        </section>

  {/* -------------------------------------------------- */}
  <section className='afterHero4'>
          <h3>話題のキャラクターたちのグッズが勢ぞろい！</h3>
          <div className='imageDiv'>
            {details[3].map((item, index)=>{
              return(
                <Cards key={index} image={item.image} name={item.name} description={item.description} ></Cards>
              )
            })}

          </div>

          </section>
  {/* ------------------------------------------------------------ */}
      <section className='afterHero5'>
        
        <h3>キャラクター紹介</h3>

        <div className='imageDiv'>
        {details[4].map((item, index)=>{
          return(
            <Cards key={index} image={item.image} name={item.name} description={item.description} info={item.info}></Cards>
          )
        })}
        </div>
        <div className='link'><a href="">キャラクター一覧へ</a></div>
    

      </section>

{/* --------------------------------------------------------------------- */}
        <section className='afterHero6'>
        <div className='imageDiv'>
        {details[5].map((item, index)=>{
          return(
            <Cards key={index} image={item}></Cards>
          )
        })}
        </div>
        </section>

{/* ------------------------------------------------------------ */}
    <section className='afterHero7'>
        
        <h3>スペシャル</h3>

        <div className='imageDiv'>
        {details[6].map((item, index)=>{
          return(
            <Cards key={index} image={item}></Cards>
          )
        })}
        </div>
    

      </section>
{/* ------------------------------------------------------------ */}
<section className='afterHero8'>
        
        <h3>キャラクター商品</h3>

        <div className='imageDiv'>
        {details[7].map((item, index)=>{
          return(
            <Cards key={index} image={item}></Cards>
          )
        })}
        </div>
    

      </section>
      <section className='afterHero9'>
      <div className='imageDiv'>
        {details[8].map((item, index)=>{
          return(
            <Cards key={index} image={item}></Cards>
          )
        })}
        {/* <a href="">SNS一覧へ</a> */}
        </div>
      </section>

      <section className='afterHero10'><p>ディズニーアカウント</p></section>
      <section className='afterHero11'>
      <div className="imageDiv"><p>ディズニーストアクラブ</p>
      <p>ディズニー・カードクラブ</p>
      <p>MovieNEX CLUB</p>
      <p>ファンダフル・ディズニー</p></div></section>

      <section className="afterHero12">
        <div className="linkDiv">
          <a href="">オンラインヘルプ（よくあるご質問）</a>
          <a href="">お問い合わせ先</a>
          <a href="">企業情報</a>
          <a href="">採用情報</a>
          <a href="">世界のディズニーサイト</a>
          <a href="">ソーシャル・レスポンシビリティ</a>
          <a href="">プライバシーポリシー</a>
          <a href="">プライバシーポリシー補足</a>
          <a href=""> 利用規約</a>
          <a href="">著作権・商標</a>
          <a href="">（ご注意事項）リンク先ショップの商品掲載について</a>
        </div>
      </section>
    <footer>
        <p>&copy; Disney</p>
      </footer>
    </>
  )
}

export default App
