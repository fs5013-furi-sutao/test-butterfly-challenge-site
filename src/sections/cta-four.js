import { Box, Text, Flex, Image, Container } from 'theme-ui';
import React from 'react';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import ctaFourImage from 'assets/school-bro.svg';

const CtaFour = () => {
  return (
    <Box as="section" sx={styles.ctaFour}>
      <Container>
        <Flex sx={styles.ctaFour.row}>

          <Box sx={styles.ctaFour.col}>
            <Box sx={styles.ctaFour.content}>
              <BlockTitle
                sx={styles.ctaFour.blockTitle}
                tagline="Core Concept"
                heading={
                  '人は教えることによって、最もよく学ぶ'
                }
              />
              <Text as="p" sx={styles.ctaFour.text}>
                {
                  '座学で一方的に教わった内容はすぐに忘れてしまいますが、自分で手を動かして実践し、他の人に自分の言葉で説明できた内容は忘れません。Awakeninng Challengeでは、参加者同士でお互いの考えを話し合い、教え合いながら結論を導くことを通じて、深い学びを得ることを目指します。'
                }
              </Text>
              <Link
                path="#"
                label="Explore details"
                variant="buttons.primary"
              />
            </Box>
          </Box>

          <Box sx={styles.ctaFour.col}>
            <Image
              src={ctaFourImage}
              sx={styles.ctaFour.img}
              alt="cta two image"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaFour;

const styles = {
  ctaFour: {
    paddingBottom: '100px',
    '@media(min-width: 1200px)': {
      paddingTop: '100px',
    },
    '@media(max-width:1024px)': {
      paddingBottom: 80,
    },
    row: {
      flexWrap: 'wrap',
    },
    col: {
      flex: '0 0 50%',
      '@media(max-width:1024px)': {
        flex: '0 0 100%',
      },
    },
    img: {
      maxWidth: 'none',
      position: 'relative',
      right: '-100px',
      bottom: '45px',
      '@media(max-width:1024px)': {
        maxWidth: '100%',
        right: 'auto',
        bottom: 'auto',
      },
    },
    content: {
      paddingLeft: '114px',
      '@media(max-width:1024px)': {
        paddingLeft: 0,
        maxWidth: 475,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
      },
      '@media(max-width:575px)': {
        maxWidth: '91%',
      },
    },
    blockTitle: {
      marginBottom: [20, null, null, 30],

      h3: {
        fontSize: ['24px', null, null, '36px', null, '48px'],
        lineHeight: 1.15,
        letterSpacing: ['-0.5px', null, null, '-1.5px'],
        whiteSpace: ['normal', null, null, null, null, 'pre-line'],
      },
    },
    text: {
      fontSize: [15, null, null, 18],
      lineHeight: 2.33,
      color: 'black',
      marginBottom: 25,
      mb: [20, null, null, null, null],
      whiteSpace: ['normal', null, null, null, 'pre-line'],
    },
  },
};
