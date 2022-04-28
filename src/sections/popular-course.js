import { Box, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import PopularCard from 'components/popular-card';
import { FaCloudShowersHeavy } from 'react-icons/fa';

const popularCourseData = [
  {
    title:
      '開発環境を構築する',
    reviewCount: '難易度 1.0 やさしい',
    watchCount: 'Terminal, VSCode, Git, OpenJDK',
    videoLink: 'L9jU-IIN0ng',
    starCount: 1,
    expanded: true,
    buttonSubtitle: '開発環境構築',
    description: 'Windows でアプリ開発の環境を構築する（MacOS の場合は HomeBrew と Terminal を使う）。',
    list: [
      {
        content: 'Windows Terminal を winget でインストールする',
      },
      {
        content: 'Git を winget でインストールする',
      },
      {
        content: 'Windows Terminal で Git Bash を使えるようにする',
      },
      {
        content: 'OpenJDK 11 を winget でインストールする',
      },
      {
        content: 'VSCode を winget でインストールする',
      },
    ],
  },
  {
    title: 'GitHub でコードを管理する',
    reviewCount: '難易度 3.0 ほどほど（独学では難しい）',
    watchCount: 'Git, GitHub, commit, push, Pull Request',
    videoLink: 'L9jU-IIN0ng',
    starCount: 3,
    expanded: true,
    buttonSubtitle: 'GitHub',
    description: 'GitHub を使ってコードを管理できるようにする。',
    linkButtonTitle: 'Git コマンドチュートリアルに行く',
    linkButtonPath: 'https://github.com/fs5013-furi-sutao/git.command.tutorial',
    list: [
      {
        content: 'GitHub でアカウントを作成する',
      },
      {
        content: 'Git コマンドチュートリアルを通しで 3 回ほどやってみる',
      },
      {
        content: 'Git コマンドチュートリアルのリポジトリをフォークしてみる',
      },
    ],
  },
  {
    title: 'Web ページを表示する',
    reviewCount: '難易度 1.0 やさしい',
    watchCount: 'Spring Boot, Gradle, localhost, Request, Response',
    videoLink: 'L9jU-IIN0ng',
    starCount: 1,
    expanded: true,
    buttonSubtitle: 'Hello World',
    description: 'Spring Boot を使ってページを表示できるようにする。',
    list: [
      {
        content: 'VSCode に Spring Boot Extension Pack をインストールする',
      },
      {
        content: 'Gradle で Spring Boot プロジェクトを作成する',
      },
      {
        content: './gradlew bootRun コマンドを実行してブラウザに Hello World を表示する',
      },
    ],
  },
  {
    title: 'DB に接続する',
    reviewCount: '難易度 2.0 慣れればやさしい',
    watchCount: 'PostgreSQL, A5M2, INSERT, SELECT, ORM',
    videoLink: 'L9jU-IIN0ng',
    starCount: 2,
    expanded: true,
    buttonSubtitle: 'DB 接続',
    description: 'Spring Boot を使ってページを表示できるようにする。',
    list: [
      {
        content: 'ローカルに PostgreSQL をインストールする',
      },
      {
        content: 'A5M2 をインストールする',
      },
      {
        content: 'PostgreSQL に DB を作成する',
      },
      {
        content: 'A5M2 にローカル PostgreSQL のDB を追加する',
      },
      {
        content: 'DB に employees テーブルを作成する',
      },
      {
        content: 'employees テーブルに従業員を3人登録する',
      },
      {
        content: 'ブラウザにランダムで従業員を1人表示する（Spring Data JPA を使う）',
      },
    ],
  },
  {
    title: 'DB を Docker 化する',
    reviewCount: '難易度 2.5 慣れればやさしい（独学では難しい）',
    watchCount: 'docker-compose',
    videoLink: 'L9jU-IIN0ng',
    starCount: 2,
    expanded: true,
    buttonSubtitle: 'Docker コンテナ',
    description: 'Spring Boot を使ってページを表示できるようにする。',
    list: [
      {
        content: 'Docker Compose で PostgreSQL コンテナを起動する',
      },
      {
        content: 'A5M2 でコンテナのDBに接続する',
      },
    ],
  },
  {
    title: 'テーブルを作成する',
    reviewCount: '難易度 3.0 ほどほど',
    watchCount: 'ER図, モデリング, DDL, リレーション',
    videoLink: 'L9jU-IIN0ng',
    starCount: 3,
    expanded: true,
    buttonSubtitle: 'データベース・SQL',
    description: 'SQL。',
    list: [
      {
        content: 'VSCode で MarkDown ファイルに Mermaid 記法を使って ER図を作成する',
      },
      {
        content: '氏名、年齢、性別、役職、部署を正規化してテーブル設計する',
      },
      {
        content: 'DB にテーブルを登録する',
      },
      {
        content: 'テストデータを作成・登録する',
      },
      {
        content: '１つ部署テーブルのデータを削除してみる',
      },
      {
        content: 'テーブルを順番に drop して全テーブルを削除する',
      },
    ],
  },
  {
    title: 'CRUD アプリを作成する',
    reviewCount: '難易度 3.0 ほどほど',
    watchCount: '仕様書, コンテナ開発',
    videoLink: 'L9jU-IIN0ng',
    starCount: 3,
    expanded: true,
    buttonSubtitle: 'CRUD アプリ',
    description: 'Spring Boot でデータの登録・表示・更新・削除できるアプリを作成する。',
    list: [
      {
        content: '従業員の氏名、年齢、性別、部署、役職を CRUD できるアプリの要望・仕様を明確にする',
      },
      {
        content: 'Spring Boot で従業員管理システムを作成する',
      },
      {
        content: 'VSCode の Remote Container 拡張機能でコンテナ開発環境を構築する',
      },
    ],
  },
  {
    title: 'REST API を作成する',
    reviewCount: '難易度 3.0 ほどほど',
    watchCount: 'REST API, Swagger, JSON',
    videoLink: 'L9jU-IIN0ng',
    starCount: 3,
    expanded: true,
    buttonSubtitle: 'REST API',
    description: 'Spring Boot で REST API を作成する。',
    list: [
      {
        content: 'Chrome 拡張機能に Talened API Tester をインストールする',
      },
      {
        content: 'Swagger UI を使えるようにする',
      },
      {
        content: 'フロントエンド（クライアント側）で従業員情報の CRUD ができるようなエンドポイントを作成する',
      },
    ],
  },
  {
    title: 'ユニットテストをやってみる',
    reviewCount: '難易度 3.0 ほどほど',
    watchCount: 'Spring Test, JUnit, DBUnit, Mock, カバレッジ',
    videoLink: 'L9jU-IIN0ng',
    starCount: 3,
    expanded: true,
    buttonSubtitle: 'ユニットテスト',
    description: 'Spring Boot でユニットテスト実施する。',
    list: [
      {
        content: 'Spring Test でテストクラスを作成する',
      },
      {
        content: 'テスト対象のクラスを作って実行して「テスト駆動開発」を体験する',
      },
      {
        content: 'カバレッジを見てみる',
      },
      {
        content: 'DB Unit を使ってリポジトリクラスのテストをしてみる',
      },
      {
        content: 'Mokit を使って Service と Controller をテストしてみる',
      },
    ],
  },
  {
    title: 'CRUD アプリのフロントエンドを作成する',
    reviewCount: '難易度 4.0 学習コストが高い',
    watchCount: 'React Hooks, JSX, コンポーネント開発, E2E テスト',
    videoLink: 'L9jU-IIN0ng',
    starCount: 4,
    expanded: true,
    buttonSubtitle: 'React',
    description: 'サーバー側の API からデータを取得して、ページに表示できるようにする。',
    list: [
      {
        content: 'React を使って従業員管理システムのフロントエンドを作成する',
      },
      {
        content: 'Storybook でコンポーネントを開発する',
      },
      {
        content: 'Jest を使ってユニットテストをやってみる',
      },
      {
        content: 'Cypress を使って E2E テストをやってみる',
      },
    ],
  },
  {
    title: 'デプロイする',
    reviewCount: '難易度 4.0 始めはハードルが高い',
    watchCount: 'AWS, IAM, VPC, EC2, RDS',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    buttonSubtitle: 'React',
    description: 'AWS に従業員管理システムをデプロイする。',
    list: [
      {
        content: 'IAMのユーザ、グループ、ロール、ポリシーの違いを説明してみよう',
      },
      {
        content: 'VPC をマルチ AZ なプライベートサブネット、パブリックサブネットに分けて構築してみよう',
      },
      {
        content: '簡単な冗長化された Web アプリケーションを作ってみよう',
      },
      {
        content: 'RDS を冗長化してみよう',
      },
    ],
  },
  {
    title: 'ユーザ登録・ログイン・ログアウト機能を追加する',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    buttonSubtitle: '簡単な認証機能',
    description: 'JWT を使った簡単な機能を実装する。',
    list: [
      {
        content: '従業員管理システムにユーザ登録機能を追加する',
      },
      {
        content: '従業員管理システムにログイン機能を追加する',
      },
      {
        content: '従業員管理システムにログアウト機能を追加する',
      },
    ],
  },
  {
    title: 'CI/CD 環境を構築する',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    buttonSubtitle: 'React',
    description: 'Spring Boot を使ってページを表示できるようにする。',
    list: [
      {
        content: 'GitHub Actions によってプッシュをきっかけに自動ビルド、自動テスト、デプロイができるようにする',
      },
    ],
  },
];

const PopularCourse = () => {
  return (
    <Box as="section" id="courses" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="Quality features"
          heading="ミッション一覧"
        />
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={index + 1 + ". " + course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
              buttonSubtitle={course.buttonSubtitle}
              numOfTopics={course.list.length}
              descriptionOfCourse={course.description}
              linkButtonTitle={course.linkButtonTitle}
              linkButtonPath={course.linkButtonPath}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    paddingBottom: ['100px'],
    '@media(max-width: 575px)': {
      paddingBottom: '60px',
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px',
      },
    },
    col: {},
  },
};
