import React from 'react';
import { Box, Container } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import BlockTitle from 'components/block-title';

const accordionData = [
  {
    isExpanded: false,
    title: '結局、チャレンジすることで何ができるようになるんですか？',
    answer: '自分の力でアプリが作れるようになります',
    contents: (
      <div>
        何を作ればいいのか、どうしたらアプリを作れるのかは最初は分からないと思います。
        最初は意味不明なミッションを調べながら、トライアンドエラーを繰り返しながら、
        ミッションを繰り返していくことで、いつの間にかアプリを作るための広い知識や経験を手に入れることができます。
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'どれぐらいのスキルレベルの人が対象ですか？',
    answer: '開発経験 2 年未満の人が対象です',
    contents: (
      <div>
        何を作ればいいのか、どうしたらアプリを作れるのかは最初は分からないと思います。
        最初は意味不明なミッションを調べながら、トライアンドエラーを繰り返しながら、
        ミッションを繰り返していくことで、いつの間にかアプリを作るための広い知識や経験を手に入れることができます。
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'アプリができるのにどれぐらい時間が掛かるんですか？',
    contents: (
      <div>
        何を作ればいいのか、どうしたらアプリを作れるのかは最初は分からないと思います。
        最初は意味不明なミッションを調べながら、トライアンドエラーを繰り返しながら、
        ミッションを繰り返していくことで、いつの間にかアプリを作るための広い知識や経験を手に入れることができます。
      </div>
    ),
  },
  {
    isExpanded: false,
    title: '基礎的なプログラミングの勉強と、このアプリ開発チャレンジと、\n\
    どれぐらいの比率で進めれば良いとかありますか？',
    answer: '気分転換としてアプリチャレンジを進めるのもオススメです',
    contents: (
      <div>
        何を作ればいいのか、どうしたらアプリを作れるのかは最初は分からないと思います。
        最初は意味不明なミッションを調べながら、トライアンドエラーを繰り返しながら、
        ミッションを繰り返していくことで、いつの間にかアプリを作るための広い知識や経験を手に入れることができます。
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="Frequent Question"
          heading="よくある質問"
        />
        <Accordion items={accordionData} />
      </Container>
    </Box>
  );
};
export default FAQ;

const styles = {
  accordion: {
    container: {
      maxWidth: '900px',
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: 'center',
    },
  },
};
