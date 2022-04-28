import { Heading, Box, Container } from 'theme-ui';
import React from 'react';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';

const CtaOne = () => {
  return (
    <Box as="section" sx={styles.ctaBox}>
      <Container>
        {/*<Heading as="h3">{'答えを与えるのではなく、 \n 答えの探し方を教える場である'}</Heading>
        <Link
          path="#"
          label="Start Learning Today"
          sx={styles.ctaBox.button}
          variant="buttons.primary"
        />*/}
        <BlockTitle
          sx={styles.blockTitle}
          tagline="What is Awakening Challenge?"
          heading={
            '答えを与えるのではなく、 \n 答えの探し方を教える場である'
          }
        />
      </Container>
    </Box>
  );
};

export default CtaOne;

const styles = {
  ctaBox: {
    textAlign: 'center',
    paddingTop: [70, null, null, null, 140],
    paddingBottom: [80, null, null, null, 0],
    p: {
      margin: 0,
      color: 'primary',
      fontWeight: 'bold',
      fontSize: '14',
      letterSpacing: '2.1px',
      textTransform: 'uppercase',
    },
    h3: {
      margin: 0,
      lineHeight: [1.25, 1.3],
      fontWeight: 700,
      whiteSpace: 'pre-line',
      marginBottom: ['20px', '45px', '68px'],
      marginTop: '10px',
      fontSize: ['24px', null, null, '36px', null, '36px', '45px', '50px'],
    },
    button: {
      paddingLeft: '25px',
      paddingRight: '25px',
    },
    blockTitle: {
      marginBottom: [20, null, null, 30],

      h3: {
        fontSize: ['36px', null, null, '36px', null, '48px'],
        lineHeight: 1.15,
        letterSpacing: ['-0.5px', null, null, '-1.5px'],
        whiteSpace: ['normal', null, null, null, null, 'pre-line'],
      },
    },
  },
};
