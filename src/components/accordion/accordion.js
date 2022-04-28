import React from 'react';
import { Text } from 'theme-ui';
import { BaseAccordion } from './base-accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from './shared';

export default function Accordion({ items, ...props }) {
  const openIcon = <FaMinus />;
  const closeIcon = <FaPlus />;
  return (
    <BaseAccordion
      stateReducer={combineReducers(single, preventClose)}
      {...props}
    >
      {({ openIndexes, handleItemClick }) => (
        <>
          {items.map((item, index) => (
            <AccordionItem
              key={item.title}
              isOpen={openIndexes.includes(index)}
            >
              <AccordionButton onClick={() => handleItemClick(index)}>
                <span>
                  {openIndexes.includes(index) ? openIcon : closeIcon}
                </span>
                {item.title}
              </AccordionButton>

              <AccordionContents isOpen={openIndexes.includes(index)}>
                <Text sx={styles.accordion}>
                  {item.answer}
                </Text>
                {item.contents}
              </AccordionContents>
            </AccordionItem>
          ))}
        </>
      )}
    </BaseAccordion>
  );
}

const styles = {
  accordion: {
    fontWeight: '700',

  },
};
