import { Box, Grid, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import FavoriteCard from 'components/favorite-card';
import fevCardImageOne from 'assets/fev-course-1-1.png';
import fevCardImageTwo from 'assets/fev-course-1-2.png';
import fevCardImageThree from 'assets/fev-course-1-3.png';

import { Swiper, SwiperSlide } from 'swiper/react';

const favoriteCourseData = [
  {
    title: '1. 自己解決力',
    description: '未知の課題に対して自ら考え、調べて結論を出す力を養う',
    image: fevCardImageOne,
    reviewCount: '3.5',
    watchCount: 'Develop your problem solving skills.',
    videoLink: 'g9avOpUOREM',
    starCount: 3,
  },
  {
    title: '2. 実践的知識',
    description: '精度の高い仮説を立てるための土台となる実践経験を培う',
    image: fevCardImageTwo,
    reviewCount: '3.0',
    watchCount: 'Wealth from knowledge.',
    videoLink: 'L9jU-IIN0ng',
    starCount: 3,
  },
  {
    title: '3. コミュニケーション',
    description: 'チームメンバと健全な議論を通じて意思決定の精度を上げる力を育む',
    image: fevCardImageThree,
    reviewCount: '4.5',
    watchCount: 'Communication is essential in business.',
    videoLink: 'L9jU-IIN0ng',
    starCount: 4,
  },
];

const FavoriteCourse = () => {
  const FavoriteCarousel = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <Box as="section" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline="Quality features"
          heading="Awkng Challenge で身につく3つのスキル"
        />
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData.map((course, index) => (
            <SwiperSlide key={index}>
              <FavoriteCard
                starCount={course.starCount}
                title={course.title}
                description={course.description}
                image={course.image}
                reviewCount={course.reviewCount}
                watchCount={course.watchCount}
              // videoLink={course.videoLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box >
  );
};

export default FavoriteCourse;

const styles = {
  fevCourse: {
    paddingTop: ['60px', null, null, '80px', '110px'],
    pb: [null, null, null, '30px', '50px', '0'],
    container: {
      maxWidth: 1440,
      '@media(max-width:1440px)': {
        maxWidth: 1240,
      },
      '.swiper-container': {
        pb: '30px',
        overflow: [null, null, null, null, null, 'visible'],
      },
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 30,
      '@media(max-width: 991px)': {
        gridTemplateColumns: '1fr 1fr',
      },
      '@media(max-width: 575px)': {
        gridTemplateColumns: '1fr',
      },
    },
    col: {
      display: 'flex',
    },
  },
};
