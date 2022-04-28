import { Box, Flex, Text, Grid, Heading, Container } from 'theme-ui';
import React from 'react';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';

const CtaThree = () => {
  return (
    <Box as="section" sx={styles.ctaThree}>
      <Container>
        <Flex sx={styles.ctaThree.row}>
          <Box sx={styles.ctaThree.colTwo}>
            <Box className="my-auto">
              <Box sx={styles.ctaThree.content}>
                <BlockTitle
                  sx={styles.ctaThree.blockTitle}
                  tagline="Core features"
                  heading={
                    '答えをもらえるのではなく、答えの探し方を教える場'
                  }
                />
                <Text as="p">
                  {
                    'Awkng Challenge は将来につながるトレーニングです。\n\
                    与えられたミッションに向かって自分で調べ考え、\
                    自分の手で要望を形にしていきます。\n\
                    \n\
                    Awkng Challenge では「これを作れば正解」という完成図は用意されていません。\
                  答えのない問題に対して、自分で調べて理解して形にしていく。\
                  その工程を作る楽しみを感じながら体験していきます。\n\
                  \n\
                  Awkng Challenge は、『4 + 4 = ？』のように決まった答えを解くのではなく、\
                  『？ = 8』になるのはどんなものがあるのか見つけていくスタイルです。\n\
                  \n\
                  「自分たちで目的地にたどり着く」ことを目指し、\
                  あなたが主体になって楽しくアプリを作っていきます。'
                  }
                </Text>
                {/*<Link
                  path="#"
                  label="Explore details"
                  variant="buttons.primary"
                />*/}
              </Box>
            </Box>
          </Box>
          <Box sx={styles.ctaThree.colOne}>
            <Grid sx={styles.ctaThree.grid}>
              <Box sx={styles.ctaThree.box}>
                <Heading as="h3" sx={styles.ctaThree.color1}>
                  Web App
                </Heading>
                <Text as="p">{'TCP/IP, SSL/TLS, \n\
                DNS, FQDN, CDN, \n\
                Request, Response, \n\
                Routing, localhost, \n\
                Cross-Origin Resource Sharing, \n\
                Session, Cookie, \n\
                Token, OAuth2, \n\
                REST API, JSON, GraphQL'}</Text>
              </Box>
              <Box sx={styles.ctaThree.box}>
                <Heading sx={styles.ctaThree.color2} as="h3">
                  Spring Boot
                </Heading>
                <Text as="p">
                  {'ORM, Spring Data JPA, DI, \n\
                  Autowired, Repository, \n\
                  Service, Controller, \n\
                  Lambok, \n\
                  OneToMany, ManyToOne, \n\
                  JDBC, DataSource, \n\
                  Gradle, \n\
                  JUnit, DBUnit, Mockito'}
                </Text>
              </Box>
              <Box sx={styles.ctaThree.box}>
                <Heading sx={styles.ctaThree.color3} as="h3">
                  React
                </Heading>
                <Text as="p">{'ECMAScript, DOM, \n\
                SPA, SSR, Webpack, \n\
                npm, npx, yarn, \n\
                React Hooks, render, \n\
                JSX, Styled Components, \n\
                axios, Context, Provider, \n\
                Redux, Recoil, \n\
                Jest, Cypress, Enzyme, \n\
                StoryBook, \n\
                Material UI, Tailwind CSS'}</Text>
              </Box>
              <Box sx={styles.ctaThree.box}>
                <Heading sx={styles.ctaThree.color4} as="h3">
                  Database
                </Heading>
                <Text as="p">
                  {'Relation Ship, ACID, \n\
                  DDL, DML, \n\
                  Transactions, \n\
                  LEFT JOIN, INNER JOIN, \n\
                  Stored Procedures, Index, \n\
                  Foreign Keys, Unique Keys, \n\
                  Subquery, \n\
                  Prepared Statement, \n\
                  N + 1 Problem'}
                </Text>
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaThree;

const styles = {
  ctaThree: {
    paddingTop: [0, null, null, null, 50, 120],
    paddingBottom: [120, null, null, null, 100, 220],
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: ['column', null, null, null, 'row-reverse'],
    },
    colOne: {
      flex: ['0 0 100%', null, null, null, '0 0 55%'],
      paddingRight: ['0', null, null, null, null, '34px'],
    },
    colTwo: {
      flex: ['0 0 100%', null, null, null, '0 0 45%'],
      display: 'flex',
      pl: ['0', null, null, null, '40px', '0'],
      '.my-auto': {
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '100%',
      },
      '@media(max-width:991px)': {
        flex: '0 0 100%',
        marginTop: '0px',
        marginBottom: '45px',
        textAlign: 'center',
      },
    },
    grid: {
      display: 'grid',
      gridGap: '45px',
      gridTemplateColumns: '1fr 1fr',
      '@media(max-width:1199px)': {
        gridGap: '30px',
      },
      '@media(max-width:425px)': {
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px',
      },
    },
    blockTitle: {
      h3: {
        fontSize: ['24px', null, null, '30px', '36px', null, '48px'],
        lineHeight: ['1.44', null, null, null, null, null, '1.15'],
        lineHeight: 1.44,
        maxWidth: ['275px', '450px', null, null, '100%'],
        marginLeft: ['auto', null, null, null, '0'],
        marginRight: ['auto', null, null, null, '0'],
        whiteSpace: ['normal', null, null, null, 'pre-line'],
      },
    },
    content: {
      '@media(min-width:1025px)': {
        paddingLeft: '41px',
      },
      '> p': {
        whiteSpace: ['normal', null, null, null, 'pre-line'],
        fontSize: ['15px', null, null, '16px', null, '18px'],
        lineHeight: ['2', null, null, null, null, '2.33'],
        color: '#02073E',
        marginBottom: '30px',
        marginTop: '25px',
        '@media(max-width:425px)': {
          whiteSpace: 'normal',
          paddingLeft: '15px',
          paddingRight: '15px',
          marginTop: '20px',
          marginBottom: '20px',
        },
      },
      '@media(max-width:991px)': {
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '20px',
      },
    },
    box: {
      boxShadow: '0px 25px 100px rgba(69, 88, 157, 0.08)',
      borderRadius: '10px',
      textAlign: 'center',
      position: 'relative',
      paddingTop: '95.5px',
      paddingBottom: '95.5px',
      '&:nth-of-type(1)': {
        top: '70px',
      },
      '&:nth-of-type(3)': {
        top: '70px',
      },
      '@media(max-width:1199px)': {
        paddingTop: '35.5px',
        paddingBottom: '35.5px',
        '&:nth-of-type(1)': {
          top: '40px',
        },
        '&:nth-of-type(3)': {
          top: '40px',
        },
      },
      '@media(max-width:425px)': {
        '&:nth-of-type(1)': {
          top: '0px',
        },
        '&:nth-of-type(3)': {
          top: '0px',
        },
      },
      h3: {
        margin: 0,
        fontSize: '36px',
        lineHeight: 1,
        fontWeight: 700,
        letterSpacing: '-1.5px',
        '@media(min-width:1281px)': {
          fontSize: '28px',
          //fontSize: '45px',
        },
        '@media(min-width:1441px)': {
          fontSize: '36px',
          //fontSize: '72px',
        },
      },
      '> p': {
        margin: 0,
        marginTop: '7px',
        fontSize: '18px',
        color: '#0F2137',
        lineHeight: 1.39,
        letterSpacing: '-0.5px',
        opacity: 0.7,
        whiteSpace: 'pre-line',
        '@media(max-width:575px)': {
          fontSize: '15px',
          lineHeight: 1.65,
        },
      },
    },
    color1: {
      color: '#EF9E48',
    },
    color2: {
      color: '#FF753A',
    },
    color3: {
      color: '#FA578E',
    },
    color4: {
      color: '#E682FF',
    },
  },
};
